export const setLocalValue = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getLocalValue = (key) => JSON.parse(localStorage.getItem(key))