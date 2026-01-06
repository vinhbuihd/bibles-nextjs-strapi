export const LOCALSTORAGE = {
  IDENTIFIER: 'identifier',
  REMEMBERME: 'yes',
};

export const getIdentifier = () => {
  return localStorage.getItem(LOCALSTORAGE.IDENTIFIER);
};

export const getRemenberMe = () => {
  return localStorage.getItem(LOCALSTORAGE.REMEMBERME);
};

export const setIdentifier = (identifier: string) => {
  return localStorage.setItem(LOCALSTORAGE.IDENTIFIER, identifier);
};

export const setRememberMe = (value: 'yes' | 'no') => {
  return localStorage.setItem(LOCALSTORAGE.REMEMBERME, value);
};

export const clearLocalStorageAuth = () => {
  localStorage.removeItem(LOCALSTORAGE.IDENTIFIER);
  localStorage.removeItem(LOCALSTORAGE.REMEMBERME);
  return;
};
