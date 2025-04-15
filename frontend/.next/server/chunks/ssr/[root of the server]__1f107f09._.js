module.exports = {

"[externals]/bootstrap [external] (bootstrap, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("bootstrap", () => require("bootstrap"));

module.exports = mod;
}}),
"[project]/js/bootstrap.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "initBootstrap": (()=>initBootstrap)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$bootstrap__$5b$external$5d$__$28$bootstrap$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/bootstrap [external] (bootstrap, cjs)");
;
const initBootstrap = function(config) {
    // Enabling tooltips
    if (config.tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new __TURBOPACK__imported__module__$5b$externals$5d2f$bootstrap__$5b$external$5d$__$28$bootstrap$2c$__cjs$29$__["Tooltip"](tooltipTriggerEl);
        });
    }
    // Enabling popovers
    if (config.popover) {
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function(popoverTriggerEl) {
            return new __TURBOPACK__imported__module__$5b$externals$5d2f$bootstrap__$5b$external$5d$__$28$bootstrap$2c$__cjs$29$__["Popover"](popoverTriggerEl, {});
        });
    }
    // Enabling toasts
    if (config.toasts) {
        const toastTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="toast"]'));
        toastTriggerList.map(function(toastTriggerEl) {
            // Define the target property
            let toastTarget = null;
            if ("A" === toastTriggerEl.nodeName) {
                toastTarget = toastTriggerEl.href || null;
                if (toastTarget.includes('#')) {
                    toastTarget = `#${toastTarget.split("#").pop()}`;
                } else {
                    return;
                }
            } else if ("BUTTON" === toastTriggerEl.nodeName) {
                toastTarget = toastTriggerEl.dataset.bsTarget || null;
            }
            // Check if the target exists
            const toastTargetEl = document.querySelector(toastTarget);
            if (!toastTargetEl) {
                return;
            }
            // Initialize toast
            const toast = new __TURBOPACK__imported__module__$5b$externals$5d2f$bootstrap__$5b$external$5d$__$28$bootstrap$2c$__cjs$29$__["Toast"](toastTargetEl, {});
            // Add click even to trigger
            toastTriggerEl.addEventListener("click", function(event) {
                event.preventDefault();
                toast.show();
            });
        });
    }
};
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__1f107f09._.js.map