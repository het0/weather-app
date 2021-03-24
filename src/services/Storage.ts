import Cookies from "universal-cookie";

import { REFRESH_TIME } from "@constants/constants";

const cookies = new Cookies();

class Storage {
  static set(name: string, data: any) {
    const currentDate = new Date();
    cookies.set(name, JSON.stringify(data), {
      expires: new Date(currentDate.getTime() + REFRESH_TIME),
      sameSite: "strict",
    });
  }
  static get(name: string) {
    return cookies.get(name);
  }
}

export { Storage };
