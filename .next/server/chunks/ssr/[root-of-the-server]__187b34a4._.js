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
"[externals]/gsap [external] (gsap, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("gsap", () => require("gsap"));

module.exports = mod;
}}),
"[externals]/gsap/ScrollTrigger.js [external] (gsap/ScrollTrigger.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("gsap/ScrollTrigger.js", () => require("gsap/ScrollTrigger.js"));

module.exports = mod;
}}),
"[externals]/sweetalert2 [external] (sweetalert2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("sweetalert2", () => require("sweetalert2"));

module.exports = mod;
}}),
"[externals]/swiper/bundle [external] (swiper/bundle, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("swiper/bundle");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/locomotive-scroll [external] (locomotive-scroll, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("locomotive-scroll", () => require("locomotive-scroll"));

module.exports = mod;
}}),
"[project]/js/main.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// Load Styles
__turbopack_context__.s({});
// Load Bootstrap init
var __TURBOPACK__imported__module__$5b$project$5d2f$js$2f$bootstrap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/js/bootstrap.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$gsap__$5b$external$5d$__$28$gsap$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/gsap [external] (gsap, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$gsap$2f$ScrollTrigger$2e$js__$5b$external$5d$__$28$gsap$2f$ScrollTrigger$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/gsap/ScrollTrigger.js [external] (gsap/ScrollTrigger.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sweetalert2__$5b$external$5d$__$28$sweetalert2$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/sweetalert2 [external] (sweetalert2, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$bundle__$5b$external$5d$__$28$swiper$2f$bundle$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/swiper/bundle [external] (swiper/bundle, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/aos [external] (aos, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$locomotive$2d$scroll__$5b$external$5d$__$28$locomotive$2d$scroll$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/locomotive-scroll [external] (locomotive-scroll, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$bundle__$5b$external$5d$__$28$swiper$2f$bundle$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$bundle__$5b$external$5d$__$28$swiper$2f$bundle$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
__TURBOPACK__imported__module__$5b$externals$5d2f$gsap__$5b$external$5d$__$28$gsap$2c$__cjs$29$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$externals$5d2f$gsap$2f$ScrollTrigger$2e$js__$5b$external$5d$__$28$gsap$2f$ScrollTrigger$2e$js$2c$__cjs$29$__["ScrollTrigger"]);
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$js$2f$bootstrap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["initBootstrap"])({
    tooltip: true,
    popover: true,
    toasts: true
});
const swiper = new __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$bundle__$5b$external$5d$__$28$swiper$2f$bundle$2c$__esm_import$29$__["default"]('.brandsSwiper', {
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
const testimonials = new __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$bundle__$5b$external$5d$__$28$swiper$2f$bundle$2c$__esm_import$29$__["default"](".testimonialsSwiper", {
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
__TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__["default"].init({
    duration: 700
});
// Your app code
console.log(`Hello ${process.env.HELLO}`);
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
            __TURBOPACK__imported__module__$5b$externals$5d2f$sweetalert2__$5b$external$5d$__$28$sweetalert2$2c$__cjs$29$__["default"].fire("Done", "Submitted Successfully.", "success");
            form.reset(); // Reset form after submission
        }).catch((error)=>{
            __TURBOPACK__imported__module__$5b$externals$5d2f$sweetalert2__$5b$external$5d$__$28$sweetalert2$2c$__cjs$29$__["default"].fire("Error", "Something went wrong. Please try again!", "error");
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__187b34a4._.js.map