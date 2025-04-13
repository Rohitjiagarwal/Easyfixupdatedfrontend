"use client";

import { useEffect } from "react";
import Script from "next/script";
import AOS from "aos";

const ClientScripts = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Aos) {
      window.Aos.init();
    }
  }, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/kursor" strategy="afterInteractive" />
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
    </>
  );
};

export default ClientScripts;
