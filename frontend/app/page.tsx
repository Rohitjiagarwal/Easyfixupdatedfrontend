
"use client"
import HomePage from '@/components/home/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/scss/_bootstrap.scss"
import "@/styles/scss/_bootstrap.scss";
import "@/styles/scss/_fonts.scss";
import "@/styles/scss/_variables.scss";
import "@/styles/scss/main.scss";
import "@/styles/scss/components/slider.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    import("@/js/main.js")
    .then(() => {
    })
    .catch((err) => console.error("Error loading main.js", err));
    import("@/js/bootstrap.js")
    .then(() => {
    })
    .catch((err) => console.error("Error loading main.js", err));


          AOS.init({
            duration: 800,
            once: false,
          });
  }, []);
  return (
    <div>
      <HomePage/>
    </div>
  );
}
