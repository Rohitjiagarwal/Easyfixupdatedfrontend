"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Navbar from "../navbar";
// import Swal from "sweetalert2";
import address from "../../public/dataStore/addresses.json";
import SubFooter from "../subfooter";

export const metadata = {
  title: "EasyFix Expert - Fridge",
};

interface FridgePageProps {
  city: keyof typeof address.locations;
  brand: string;
}

const FridgePage: React.FC<FridgePageProps> = ({ city, brand }) => {
  return (
    <>
      <Navbar />
      <section className="breadcrumb mt-7">
        <div className="container-fluid">
          <div className="breadcrumb-content border">
            <div className="breadcrumb-content-item">
              <h2 className="fw-semibold display-5 text-center">
                Fridge <span className="gradient-text">Service in</span>
              </h2>
              <nav
                style={
                  { "--bs-breadcrumb-divider": "'>'" } as React.CSSProperties
                }
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a className="text-decoration-none text-white" href="#">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Fridge Service
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="Booking-form">
        <div className="container">
          <div className="booking-form p-4 w-100 w-md-75 mx-auto shadow bg-white custom-border-radius">
            <form>
              <div className="row g-4 align-items-end">
                <div className="col-md-4">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="col-md-4">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill w-100 p-2"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="intro my-8">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="p-3 p-md-5 custom-bg custom-border-radius">
                <h6 className="text-primary text-uppercase section-title">
                  Introduction
                </h6>
                <h2 className="fw-bold display-5 section-subtitle">
                  <span className="gradient-text">Fridge</span> Service center
                </h2>
                <p>
                  Are you facing issues with your refrigerator? Whether it’s a
                  minor repair, routine maintenance, or a major breakdown, we
                  are here to provide expert solutions for all your
                  refrigeration needs. Our skilled technicians offer top-notch
                  refrigerator repair, installation, and servicing for both
                  residential and commercial spaces.
                </p>
                <ul className="list-group list-group-flush mt-4">
                  <li className="list-group-item d-flex align-items-center">
                    <span>
                      <img
                        src="/images/album/icon-park-solid--check-one.svg"
                        width="24"
                        height="24"
                        className="me-4"
                        alt="tick-icon"
                      />
                    </span>
                    Skilled Technicians
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span>
                      <img
                        src="/images/album/icon-park-solid--check-one.svg"
                        width="24"
                        height="24"
                        className="me-4"
                        alt="tick-icon"
                      />
                    </span>
                    Affordable and Transparent
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span>
                      <img
                        src="/images/album/icon-park-solid--check-one.svg"
                        width="24"
                        height="24"
                        className="me-4"
                        alt="tick-icon"
                      />
                    </span>
                    Quick Service
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span>
                      <img
                        src="/images/album/icon-park-solid--check-one.svg"
                        width="24"
                        height="24"
                        className="me-4"
                        alt="tick-icon"
                      />
                    </span>
                    All Brands Supported
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="/images/album/fridge.png"
                width="100%"
                height="100%"
                alt="Fridge"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="brands-we-service my-9">
        <div className="container">
          <div className="text-center mb-5">
            <div className="w-100 d-flex align-items-center justify-content-center">
              <h6 className="text-primary text-uppercase section-title">
                Brands
              </h6>
            </div>
            <h2 className="fw-bold display-5 section-subtitle">
              Refrigerator <span className="gradient-text">Brands</span> We
              Service
            </h2>
            <p className="text-custom-light">
              Expert Repair & Maintenance for All Leading Refrigerator Brands
            </p>
          </div>

          <div className="row g-6">
            {/* Repeat for other brands */}
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="#">
                  <img
                    src="images/album/brands/lg.svg"
                    width="100%"
                    height="100%"
                    alt="lg fridge service"
                  />
                </a>
                <a
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href=""
                >
                  LG
                </a>
              </div>
            </div>
            {/* Add more brand divs here */}
          </div>
        </div>
      </section>

      <section className="service-contact">
        <div className="text-center mb-5">
          <div className="w-100 d-flex align-items-center justify-content-center">
            <h6 className="text-primary text-uppercase section-title">
              Get in Touch with Us
            </h6>
          </div>
          <h2 className="fw-bold display-5 section-subtitle">
            Have a Question or Need Assistance?
            <br /> <span className="gradient-text">Contact Us</span> Today!
          </h2>
          <a
            href="tel:+919876543210"
            className="btn btn-primary rounded-pill px-5"
            role="button"
            data-bs-toggle="button"
          >
            Call Us
          </a>
        </div>
        <div className="booking-form p-4 w-100 w-md-50 mx-auto bg-white rounded-4">
          <h6 className="mb-4 text-custom fw-semibold text-center">
            <span className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="var(--sk-text-custom-color)"
                  fillRule="evenodd"
                  d="M11.25 2.5a2.25 2.25 0 0 0-2.154 2.904l.13.43l-.317.318l-6.254 6.253l-.53-.53l.53.53a.664.664 0 0 0 .94.94L9.848 7.09l.318-.318l.43.13a2.25 2.25 0 0 0 2.685-3.124l-1.5 1.501a.75.75 0 1 1-1.061-1.06l1.5-1.5a2.24 2.24 0 0 0-.97-.22ZM7.5 4.75a3.75 3.75 0 1 1 3.114 3.696L10.061 9l.939.94l.47-.47l.53-.53l.53.53l1.875 1.875a2.164 2.164 0 1 1-3.06 3.06L9.47 12.53L8.94 12l.53-.53l.47-.47l-.94-.94l-4.345 4.345l-.53-.53l.53.53a2.164 2.164 0 1 1-3.06-3.06L5.939 7L3.5 4.56l-.617.617l-.507-.761l-1-1.5l-.341-.512l.435-.434l.5-.5l.434-.435l.512.341l1.5 1l.761.507l-.616.617L7 5.94l.554-.554A4 4 0 0 1 7.5 4.75m4.5 6.31l1.345 1.345a.664.664 0 0 1-.94.94L11.061 12z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            For Service Booking
          </h6>
          <form id="submit-to-google-sheet">
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-custom-light">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label text-body-tertiary">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                id="phone"
                pattern="[0-9]{10}"
                placeholder="Enter 10-digit phone number"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary rounded-pill mt-3 w-100 p-2"
            >
              Book Now
            </button>
          </form>
        </div>
      </section>
      <SubFooter city={city} brand={brand} />
    </>
  );
};

export default FridgePage;
