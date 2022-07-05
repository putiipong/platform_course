/**************** session Storage *******************/
export const sessionSave = (key, items) => {
  sessionStorage.setItem(key, JSON.stringify(items));
};
export const sessionGet = (key) => {
  return sessionStorage.getItem(key);
};
export const sessionRemove = (key) => {
  sessionStorage.removeItem(key);
};
