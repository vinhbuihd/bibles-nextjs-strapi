import Cookies, { CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

export function saveCookie(key: string, value: string, options?: CookieSetOptions) {
  return cookies.set(key, value, options);
}

export const getCookie = (key: string) => {
  return cookies.get(key);
};

export function removeCookie(key: string) {
  return cookies.remove(key);
}
