"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/scss/_bootstrap.scss";
import "@/styles/scss/_bootstrap.scss";
import "@/styles/scss/_fonts.scss";
import "@/styles/scss/_variables.scss";
import "@/styles/scss/main.scss";
import "@/styles/scss/components/slider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import WashingMachinePage from "@/components/services/washingMachine";
import ACPage from "@/components/services/ac";
import WaterHeaterPage from "@/components/services/waterHeater";
import OvenPage from "@/components/services/oven";
import FridgePage from "@/components/services/fridge";
import DishWasher from "@/components/services/dishWasher";
import location from "../../../public/dataStore/locations.json"; // Import the location object
import address from "../../../public/dataStore/addresses.json"; // Import the location object

import Head from "next/head";

export async function getStaticPaths() {
  const { cities } = location; // Destructure cities from location (products are static)

  // Hardcoded list of products
  const products = [
    "AC",
    "Fridge",
    "WashingMachine",
    "dishWasher",
    "oven",
    "waterHeater",
  ];

  const paths: {
    params: {
      city: string;
      product: string;
    };
  }[] = [];

  // Loop through cities and products to generate the paths
  cities.forEach((city) => {
    products.forEach((product) => {
      const productName = product + "servicecenter"; // Append "servicecenter" to the product name
      paths.push({ params: { city, product: productName } });
    });
  });

  return {
    paths,
    fallback: "blocking", // or fallback: true
  };
}

export async function getStaticProps({
  params,
}: {
  params: {
    city: string;
    product: string;
  };
}) {
  return { props: { params } };
}

export default function ServicecenterPage({
  params,
}: {
  params: {
    city: keyof typeof address.locations; // Ensure city is a key of address.locations
    product: string;
  };
}) {
  useEffect(() => {
    import("@/js/main.js")
      .then(() => {})
      .catch((err) => console.error("Error loading main.js", err));
    import("@/js/bootstrap.js")
      .then(() => {})
      .catch((err) => console.error("Error loading main.js", err));

    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const { city, product } = params;

  const formattedProduct =
    product === "WashingMachine"
      ? "Washing Machine"
      : product === "waterHeater"
      ? "Water Heater Geyser"
      : product;

  // Set the page title dynamically
  const pageTitle = `Best ${formattedProduct}  Repair & Service in ${city} @${address.locations?.[city]?.mobileNumber0} | Starting @ ₹149`;

  return (
    <>
      {/* SEO and Metadata */}
      <Head>
        <title>{pageTitle}</title>

        {/* Meta description */}
        <meta
          name="description"
          content={`Get Upto 50% Off Installation, Maintenance, and More! Fast & Expert ${product} Service Near You. Call Now for Affordable Repairs & Solutions!`}
        />

        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Keywords */}
        <meta
          name="keywords"
          content={`${product} service in ${city}, ${product} repair in ${city}, expert ${product} repair, affordable ${product} services in ${city}`}
        />

        {/* Author Meta Tag */}
        <meta name="author" content="EasyFix Expert" />

        {/* Open Graph tags for social media */}
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={`Get Upto 50% Off Installation, Maintenance, and More! Fast & Expert ${product} Service Near You. Call Now for Affordable Repairs & Solutions!`}
        />
        <meta
          property="og:url"
          content={`https://easyfixexpert.com/${city}/${product}`}
        />
        <meta property="og:type" content="website" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              name: `Best ${product} Service & Repair in ${city}`,
              provider: {
                "@type": "Organization",
                name: "EasyFix Expert",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: `${address.locations?.[city]?.line1} ${address.locations?.[city]?.line2} ${address.locations?.[city]?.line3}`,
                  addressLocality: city,
                  addressRegion: "Tamil Nadu",
                  postalCode: address.locations?.[city]?.postalCode,
                  addressCountry: "IN",
                },
                telephone: address.locations?.[city]?.mobileNumber1,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "43678",
              },
              priceRange: "₹₹",
              url: `https://www.easyfixexpert.com/${city}/${product}`,
            }),
          }}
        />
      </Head>

      {/* Render pages based on product */}
      {product === "WashingMachineservicecenter" && (
        <WashingMachinePage city={city} brand="generic" />
      )}
      {product === "ACservicecenter" && <ACPage city={city} brand="generic" />}
      {product === "waterHeaterservicecenter" && (
        <WaterHeaterPage city={city} brand="generic" />
      )}
      {product === "ovenservicecenter" && (
        <OvenPage city={city} brand="generic" />
      )}
      {product === "Fridgeservicecenter" && (
        <FridgePage city={city} brand="generic" />
      )}
      {product === "dishWasherservicecenter" && (
        <DishWasher city={city} brand="generic" />
      )}
    </>
  );
}
