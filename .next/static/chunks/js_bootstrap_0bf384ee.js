(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/js/bootstrap.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "initBootstrap": (()=>initBootstrap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bootstrap/dist/js/bootstrap.esm.js [app-client] (ecmascript)");
;
const initBootstrap = function(config) {
    // Enabling tooltips
    if (config.tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"](tooltipTriggerEl);
        });
    }
    // Enabling popovers
    if (config.popover) {
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function(popoverTriggerEl) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"](popoverTriggerEl, {});
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
            const toast = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"](toastTargetEl, {});
            // Add click even to trigger
            toastTriggerEl.addEventListener("click", function(event) {
                event.preventDefault();
                toast.show();
            });
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=js_bootstrap_0bf384ee.js.map