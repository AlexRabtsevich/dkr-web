export const getItemFromLocalStorage = (key: string) => localStorage.getItem(key);
export const setItemToLocaleStorage = (key: string, value: string) => localStorage.setItem(key, value);
export const removeFromLocaleStorage = (key: string) => localStorage.removeItem(key);
