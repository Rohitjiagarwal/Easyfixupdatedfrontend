(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/js/bootstrap.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "initBootstrap": (()=>initBootstrap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bootstrap/dist/js/bootstrap.esm.js [client] (ecmascript)");
;
const initBootstrap = function(config) {
    // Enabling tooltips
    if (config.tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Tooltip"](tooltipTriggerEl);
        });
    }
    // Enabling popovers
    if (config.popover) {
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function(popoverTriggerEl) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Popover"](popoverTriggerEl, {});
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
            const toast = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Toast"](toastTargetEl, {});
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
"[project]/js/main.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Load Styles
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
// Load Bootstrap init
var __TURBOPACK__imported__module__$5b$project$5d2f$js$2f$bootstrap$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/js/bootstrap.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$bundle$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-bundle.mjs [client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/swiper-core.mjs [client] (ecmascript) <export S as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$locomotive$2d$scroll$2f$dist$2f$locomotive$2d$scroll$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js [client] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
;
;
;
;
;
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
// });
// Loading bootstrap with optional features
(0, __TURBOPACK__imported__module__$5b$project$5d2f$js$2f$bootstrap$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initBootstrap"])({
    tooltip: true,
    popover: true,
    toasts: true
});
const swiper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__["default"]('.brandsSwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50
        }
    }
});
const testimonials = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__["default"](".testimonialsSwiper", {
    direction: "vertical",
    slidesPerView: 2.5,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
// const servicesSwiper = new Swiper(".servicesSwiper", {
//   slidesPerView: "auto",
//   spaceBetween: 30,
//   // direction: "vertical",
//   // centeredSlides: true,
//   navigation: {
//     nextEl: ".swiper-button-services-next",
//     prevEl: ".swiper-button-services-prev",
//   }, 
//   grabCursor: true,
// });
// new kursor({
//   type: 4, 
//   color: '#3FA2F6',
//   removeDefaultCursor: true
// });
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].init({
    duration: 700
});
// Your app code
console.log(`Hello ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.HELLO}`);
function submitGoogleForm() {
    debugger;
    const scriptURL = "https://script.google.com/macros/s/AKfycbz232FUBK-o9cKorvtRTZ8WEBNWooUsJ_GiKGmL_tA6V0hxPFSoEKNd1GfORWHwk8kQ/exec";
    const form = document.getElementById("submit-to-google-sheet");
    if (form) {
        var formData = new FormData(form);
        fetch(scriptURL, {
            method: "POST",
            body: formData
        }).then((response)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fire("Done", "Submitted Successfully.", "success");
            form.reset(); // Reset form after submission
        }).catch((error)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].fire("Error", "Something went wrong. Please try again!", "error");
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=js_6f8a6efd._.js.map