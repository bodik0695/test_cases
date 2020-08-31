export const setToLocaleStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLocaleStorage = (key) => {
    return window.localStorage.getItem(key);
}

export const removeFromLocaleStorage = (key) => {
    window.localStorage.removeItem(key);;
}
