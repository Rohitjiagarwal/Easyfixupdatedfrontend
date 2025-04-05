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
import WashingMachinePage from '@/components/products/washingMachine';
import AirConditionerPage from '@/components/products/ac';
import WaterHeaterPage from '@/components/products/waterHeater';
import OvenPage from '@/components/products/oven';
import FridgePage from '@/components/products/fridge';
import DishWasher from '@/components/products/dishWasher';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export async function getStaticPaths(){
    const cities = ["Karaikudi", "Madurai", "Chennai", "Coimbatore", "Tirpur"];
    const brands = ["Daikin", "Samsung" , "LG", "Whirlpool", "Godrej"];
    const products = ["AC", "Fridge", "WashingMachine", "dishWasher", "oven", "waterHeater"];

    const paths : {params: {
        city: string
        brand: string
        product: string
    }}[] = [];
    cities.forEach((city) => {
        brands.forEach((brand) => {
            products.forEach((product) => {
                paths.push({params : {city, brand, product}});
            })
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
        brand: string
        product: string
    }}) {
    // console.log("eh");
    // const res = await fetch(`http://localhost:3000/api?city=${encodeURIComponent(params.city)}&brand=${encodeURIComponent(params.brand)}&product=${encodeURIComponent(params.product)}`);
    // const data = await res.json();
    // console.log("daa", data)
    return {props: { params}};
}

export default function DetailPage({params}: {
	params: {
		city: string,
		brand: string,
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
    const {city, brand, product} = params;
      console.log(params)
      type cities = "Karaikudi" | "Madurai" | "Chennai" | "Coimbatore" | "Tirupur"
    return(
        <> 
			{
				product === "WashingMachine" && <WashingMachinePage city={city as cities} brand={brand}/>
			}
			{
				product === "AC" && <AirConditionerPage brand={brand} city={city as cities}/>
			}
			{
				product === "waterHeater" && <WaterHeaterPage city={city as cities}/>
			}
			{
				product === "oven" && <OvenPage city={city as cities}/>
			}
			{
				product === "Fridge" && <FridgePage city={city as cities} brand={brand}/>
			}
			{
				product === "dishWasher" && <DishWasher city={city as cities}/>
			}
        </>
    )
}