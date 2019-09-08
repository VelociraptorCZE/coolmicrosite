if (!Object.fromEntries) {
    Object.fromEntries = function (iterable) {
        const o = {};
        [...iterable].forEach(([key, value]) => { o[key] = value });
        return o;
    }
}