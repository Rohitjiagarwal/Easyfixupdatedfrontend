"use client"

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
import WashingMachinePage from '@/components/services/washingMachine';
import ACPage from '@/components/services/ac';
import WaterHeaterPage from '@/components/services/waterHeater';
import OvenPage from '@/components/services/oven';
import FridgePage from '@/components/services/fridge';
import DishWasher from '@/components/services/dishWasher';

export async function getStaticPaths(){
    const cities = ["Karaikudi", "Madurai", "Chennai", "Coimbatore", "Tirpur"];
    const products = ["AC", "Fridge", "WashingMachine", "dishWasher", "oven", "waterHeater"];

    const paths : {params: {
        city: string
        product: string
    }}[] = [];
    cities.forEach((city) => {
        products.forEach((product) => {
            const productName = product+"servicecenter";
            paths.push({params : {city, product: productName}});
        })
    })
    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}: {
    params: {
        city: string
        product: string
    }}) {
    return {props: { params}};
}

export default function ServicecenterPage({params}: {
    params: {
        city: string,
        product: string,
    }
}) {

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
    const {city, product} = params;
      console.log(params)
      type cities = "Karaikudi" | "Madurai" | "Chennai" | "Coimbatore" | "Tirupur";
    return(
        <>
        {
            product === "WashingMachineservicecenter" && <WashingMachinePage city={city as cities}/>
        }
        {
            product === "ACservicecenter" && <ACPage city={city as cities}/>
        }
        {
            product === "waterHeaterservicecenter" && <WaterHeaterPage city={city as cities}/>
        }
        {
            product === "ovenservicecenter" && <OvenPage city={city as cities} />
        }
        {
            product === "Fridgeservicecenter" && <FridgePage city={city as cities} />
        }
        {
            product === "dishWasherservicecenter" && <DishWasher city={city as cities}/>
        }
        </>
    )
}