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
          <html lang="en">
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta charset="utf-8" />
                <title>Welcome to Razzle</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="description" content="Weather forecast information">
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
                <link rel="manifest" href="/manifest.json" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" media="print" onload="this.media='all'" />
                <noscript>
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" />
                </noscript>
            </head>
            <body>
                <div id="root">${markup}</div>
            </body>
        </html>`
      );
    }
  });

export default server;
