
"use client"

import AboutUs from "@/components/home/about"
import Brands from "@/components/home/brands";
import ContactUs from "@/components/home/contact";
import Faq from "@/components/home/faq";
import LandingPage from "@/components/home/landing";
import Milestones from "@/components/home/milestones";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";


export default function HomePage() {
    return (
        <>
        <LandingPage/>
        <AboutUs/>
        <Milestones/>
        <Services/>
        <Brands/>
        <Faq/>
        <Testimonials/>
        <ContactUs/>
        </>
    )
}