import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import cookiesMiddleware from "universal-cookie-express";
import { renderToString } from "react-dom/server";
import { CookiesProvider } from "react-cookie";

import { App } from "./application";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(cookiesMiddleware())
  .get("/*", (req, res) => {
    const context = {};
    const markup = renderToString(
      <CookiesProvider cookies={req.universalCookies}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </CookiesProvider>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ""
        }
        ${
          process.env.NODE_ENV === "production"
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
        <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,700,400' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      );
    }
  });

export default server;
