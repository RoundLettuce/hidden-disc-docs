function fuzzyFnSearch(n, b) {
    (d = typeof b === "undefined" ? true : b,
        n = n.toLowerCase(),
        m = new Array());
    webpackChunkdiscord_app.push([
        [Math.random()], {},
        (e) => {
            m.push(...Object.values(e.c).filter(m => m?.exports && ((m?.exports?.default && Object.keys(m.exports.default).some(key => key.toLowerCase().includes(n))) || (m.exports?.default?.prototype && Object.keys(m.exports.default.prototype).some(key => key.toLowerCase().includes(n))) || Object.keys(m.exports).some(key => key.toLowerCase().includes(n)))))
        }
    ]);
    if (d) {
        m.forEach(f => m.push(typeof f?.exports?.default === "undefined" ? f?.exports : f?.exports?.default));
        for (var i = 0; i < m.length; i++) {
            m.forEach((f, i) => typeof f?.id === "undefined" ? m = m : m.splice(i, 1));
        }
        return [...m];
    } else {
        return [...m];
    }
}
