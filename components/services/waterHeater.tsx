"use client";

import Navbar from "../navbar";
import address from "../../public/dataStore/addresses.json";
import SubFooter from "../subfooter";

export const metadata = {
  title: "EasyFix Expert - Water Heater",
};

export default function WaterHeaterPage({
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

      {/* (OPTIONAL) JUMBOTRON SECTION
            If you want to enable that code, just uncomment and convert it to JSX here. */}
      {/*
        <div id="smooth-wrapper" data-scroll-container>
          <div id="smooth-content">
            <div className="container">
              <section id="jumbotron" className="my-4" data-scroll-section>
                <div className="bg-light p-5">
                  <h1
                    data-scroll
                    data-scroll-speed="1"
                    data-scroll-sticky
                    data-scroll-target="#jumbotron"
                  >
                    Hello, world!
                  </h1>
                  <div className="d-flex">
                    <p data-scroll data-scroll-speed="7" data-scroll-direction="horizontal">
                      This is a jumbotron example...
                    </p>
                    ...
                  </div>
                  <p>
                    <Link
                      className="btn btn-primary btn-lg"
                      href="https://getbootstrap.com/docs/4.1/components/jumbotron/"
                      role="button"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        */}
      <SubFooter city={city} brand={brand} />
    </>
  );
}
