/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GetStaticProps, GetStaticPaths } from "next";
import location from "../../../public/dataStore/locations.json";
import address from "../../../public/dataStore/addresses.json";
import Head from "next/head";

// Importing individual product components
import WashingMachinePage from "@/components/products/washingMachine";
import AirConditionerPage from "@/components/products/ac";
import WaterHeaterPage from "@/components/products/waterHeater";
import OvenPage from "@/components/products/oven";
import FridgePage from "@/components/products/fridge";
import DishWasherPage from "@/components/products/dishWasher";

// Define types for city, brand, and product parameters
type City = "Karaikudi" | "Madurai" | "Chennai" | "Coimbatore" | "Tirupur";
type Brand = "Daikin" | "Samsung" | "LG" | "Whirlpool" | "Godrej" | "Generic";
type Product =
  | "AC"
  | "Fridge"
  | "WashingMachine"
  | "DishWasher"
  | "Oven"
  | "WaterHeater";

// Function to generate static paths
export const getStaticPaths: GetStaticPaths = async () => {
  const { cities, products } = location;

  const paths: { params: { city: City; brand: Brand; product: Product } }[] =
    [];

  cities.forEach((city) => {
    products.forEach((productObj) => {
      productObj.brands.forEach((brand) => {
        paths.push({
          params: {
            city: city as City,
            brand: brand as Brand,
            product: productObj.name as Product,
          },
        });
      });
    });
  });

  return {
    paths,
    fallback: "blocking", // no quotes!
  };
};

// Function to generate static props (fetching data for the page)
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { city, brand, product } = params as {
    city: City;
    brand: Brand;
    product: Product;
  };

  return {
    props: {
      params: { city, brand, product },
    },
  };
};

// Your page component
export default function DetailPage({
  params,
}: {
  params: { city: City; brand: Brand; product: Product };
}) {
  const { city, brand, product } = params;

  useEffect(() => {
    import("@/js/main.js")
      .then(() => {})
      .catch((err) => console.error("Error loading main.js", err));
    import("@/js/bootstrap.js")
      .then(() => {})
      .catch((err) => console.error("Error loading bootstrap.js", err));

    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const formattedProduct =
    product === "WashingMachine"
      ? "Washing Machine"
      : product === "WaterHeater"
      ? "Water Heater Geyser"
      : product;

  // Set the page title dynamically
  const pageTitle = `Best ${brand} ${formattedProduct} Repair & Service in ${city} @${address.locations?.[city]?.mobileNumber0} | Starting @ ₹149`;

  return (
    <>
      {/* SEO and Metadata */}
      <Head>
        <title>{pageTitle}</title>

        {/* Meta description */}
        <meta
          name="description"
          content={`Get Upto 50% Off Installation, Maintenance, and More! Fast & Expert ${formattedProduct} Service Near You. Call Now for Affordable Repairs & Solutions!`}
        />

        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Keywords - Optional (Not heavily used by search engines anymore) */}
        <meta
          name="keywords"
          content={`${formattedProduct} service in ${city}, ${brand} ${formattedProduct} repair in ${city}, expert ${brand} ${formattedProduct} repair, affordable ${formattedProduct} services in ${city}`}
        />

        {/* Author Meta Tag */}
        <meta name="author" content="EasyFix Expert" />

        {/* Open Graph tags for social media */}
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={`Get Upto 50% Off Installation, Maintenance, and More! Fast & Expert ${formattedProduct} Service Near You. Call Now for Affordable Repairs & Solutions!`}
        />
        <meta
          property="og:url"
          content={`https://easyfixexpert.com/${city}/${brand}/${product}`}
        />
        <meta property="og:type" content="website" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/album/favicon//apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/album/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/album/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data (JSON-LD) for Service, Ratings, Address, and Mobile Number */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: `EasyFix Expert - ${brand} ${product} Service Center in ${city}`,
              description: `Get reliable and affordable ${brand} ${product} repair and service in ${city}. EasyFix Expert offers fast doorstep service, trained technicians, and genuine spare parts.`,
              image: "https://www.easyfixexpert.com/assets/logo.png",
              url: `https://www.easyfixexpert.com/${city}/${brand}/${product}`,
              telephone: address.locations?.[city]?.mobileNumber1,
              priceRange: "₹99",
              address: {
                "@type": "PostalAddress",
                streetAddress: `${address.locations?.[city]?.line1} ${address.locations?.[city]?.line2} ${address.locations?.[city]?.line3}`,
                addressLocality: city,
                addressRegion: "Tamil Nadu",
                postalCode: address.locations?.[city]?.postalCode,
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: address.locations?.[city]?.latitude || "10.9601", // fallback for Karaikudi
                longitude: address.locations?.[city]?.longitude || "78.0766",
              },
              openingHours: "Mo-Sa 09:00-18:00",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "3678",
              },
              makesOffer: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: `${brand} ${product} Service & Repair`,
                  description: `Top ${brand} ${product} service and repair solutions available in ${city}. Book online or call now for fast assistance.`,
                },
              },
              sameAs: [
                "https://www.facebook.com/easyfixexpert",
                "https://www.instagram.com/easyfixexpert",
              ],
            }),
          }}
        />
      </Head>

      {/* Render product-specific content */}
      {product === "WashingMachine" && (
        <WashingMachinePage city={city} brand={brand} />
      )}
      {product === "AC" && <AirConditionerPage city={city} brand={brand} />}
      {product === "WaterHeater" && (
        <WaterHeaterPage city={city} brand="Generic" />
      )}
      {product === "Oven" && <OvenPage city={city} brand="Generic" />}
      {product === "Fridge" && <FridgePage city={city} brand={brand} />}
      {product === "DishWasher" && (
        <DishWasherPage city={city} brand="Generic" />
      )}
    </>
  );
}
