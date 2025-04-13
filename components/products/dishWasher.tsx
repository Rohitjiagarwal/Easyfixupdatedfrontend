import Navbar from "../navbar";
import SubFooter from "../subfooter";
import address from "../../public/dataStore/addresses.json";

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

      {/* Since the original dish-washer.html contains only a navbar and a footer, 
            the main body content is omitted. You can add your page-specific content here if needed. */}

      {/* FOOTER */}
      <SubFooter city={city} brand={brand} />
    </>
  );
}
