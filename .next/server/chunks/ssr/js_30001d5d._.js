module.exports = {

"[project]/js/main.js [app-ssr] (ecmascript, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_234b772d._.js",
  "server/chunks/ssr/js_8b8dc8ca._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/js/main.js [app-ssr] (ecmascript)");
    });
});
}}),
"[project]/js/bootstrap.js [app-ssr] (ecmascript, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_f86474f7._.js",
  "server/chunks/ssr/js_bootstrap_9b8a4138.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/js/bootstrap.js [app-ssr] (ecmascript)");
    });
});
}}),

};