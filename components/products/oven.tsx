// src/app/services/oven/page.js

import Navbar from "../navbar";
import address from "../../public/dataStore/addresses.json";
import SubFooter from "../subfooter";

export const metadata = {
  title: "EasyFix Expert - Oven",
};

export default function OvenPage({
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

      {/* FOOTER */}

      {/* (OPTIONAL) JUMBOTRON OR OTHER CONTENT
            If you want the commented-out code from the original HTML, 
            you can uncomment it below and adapt as necessary. */}
      {/*
        <div id="smooth-wrapper" data-scroll-container>
          <div id="smooth-content">
            <div className="container">
              <section
                id="jumbotron"
                className="my-4"
                data-scroll-section
              >
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
                    <p data-scroll data-scroll-speed="7" data-scroll-direction="horizontal">
                      Additional text...
                    </p>
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
