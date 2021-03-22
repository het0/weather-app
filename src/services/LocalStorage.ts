import Cookies from "universal-cookie";

const cookies = new Cookies();

class LocalStorage {
  static set(name: string, data: any) {
    cookies.set(name, JSON.stringify(data));
  }
  static get(name: string) {
    return cookies.get(name);
  }
}

export { LocalStorage };
