"use client";

import Navbar from "../navbar";
import address from "../../public/dataStore/addresses.json";
import SubFooter from "../subfooter";

export default function DishWasher({
  city,
  brand,
}: {
  city: keyof typeof address.locations;
  brand: string;
}) {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <SubFooter city={city} brand={brand} />
    </>
  );
}
