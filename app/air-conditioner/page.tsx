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
import ContactUs from "@/components/home/contact";
import Navbar from "@/components/navbar";
import Link from "next/link"; // Importing Link from next/link

export default function Home() {
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
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* BODY */}
      <section className="breadcrumb mt-7">
        <div className="container-fluid">
          <div className="breadcrumb-content border">
            <div className="breadcrumb-content-item">
              <h2 className="fw-semibold display-5 text-center">
                Air Conditioner
                <span className="gradient-text"> Service</span>
              </h2>
              <nav
                style={
                  { "--bs-breadcrumb-divider": "'>'" } as React.CSSProperties
                }
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link href="/" className="text-decoration-none text-white">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Ac Service
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
                  <span className="gradient-text">AC</span> Repair & Service
                  center
                </h2>
                <p>
                  Are you facing issues with your air conditioner? Whether it’s
                  a minor repair, routine maintenance, or a major breakdown, we
                  are here to provide expert solutions for all your air
                  conditioning needs...
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
                src="/images/album/pngwing.com (1).png"
                width="100%"
                height="100%"
                alt=""
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
                brands
              </h6>
            </div>
            <h2 className="fw-bold display-5 section-subtitle">
              AC <span className="gradient-text">Brands</span> We Service
            </h2>
            <p className="text-custom-light">
              Expert Repair & Maintenance for All Leading AC Brands
            </p>
          </div>

          <div className="row g-6">
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <Link href="/services/air-conditioner/samsung-ac-service-centre">
                  <img
                    src="/images/album/brands/bluestar.avif"
                    width="100%"
                    height="100%"
                    alt="bluestar ac service center"
                  />
                </Link>
                <Link
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href="#"
                >
                  Blue star
                </Link>
              </div>
            </div>
            {/* ... repeat brand items for Voltas, Carrier, Hitachi, LG, Samsung, etc. ... */}
          </div>
        </div>
      </section>

      <section className="our-service-includes my-9">
        <div className="container">
          <div className="text-center mb-5">
            <div className="w-100 d-flex align-items-center justify-content-center">
              <h6 className="text-primary text-uppercase section-title">
                Our AC Services Include
              </h6>
            </div>
            <h2 className="fw-bold display-5 section-subtitle">
              Comprehensive Solutions for <br />
              All Your <span className="gradient-text">
                Air Conditioning
              </span>{" "}
              Needs
            </h2>
            <p className="text-custom-light">
              At EasyFix Expert, we offer a full range of professional air
              conditioning services...
            </p>
          </div>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            {/* Example card */}
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="/images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h5 className="card-title m-0">AC Installation</h5>
                </div>
              </div>
            </div>
            {/* Repeat for AC Repair, Maintenance & Tune-ups, AC Replacement, etc. */}
          </div>
        </div>
      </section>

      <section className="our-service-includes my-10">
        <div className="container">
          <div className="text-center mb-5">
            <div className="w-100 d-flex align-items-center justify-content-center">
              <h6 className="text-primary text-uppercase section-title">
                Areas We Serve
              </h6>
            </div>
            <h2 className="fw-bold display-5 section-subtitle">
              AC Repair Services Across <br />
              <span className="gradient-text">Various Regions</span> and Nearby
              Areas
            </h2>
            <p className="text-custom-light">
              At srikk service centre, we offer a full range of professional air
              conditioning services...
            </p>
          </div>

          <div className="row row-cols-1 g-4 w-md-50 w-100 mx-auto">
            {/* Example location card */}
            <div className="col">
              <Link href="https://www.google.com/maps/place/Karaikudi,+Tamil+Nadu">
                <div className="card h-100">
                  <div className="card-body">
                    <span className="check-mark">
                      <img
                        src="/images/album/ion--location-sharp.svg"
                        height="28"
                        width="28"
                        alt="location-icon"
                      />
                    </span>
                    <h6 className="card-title">
                      Ac Repair Service Centre in Karaikudi
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* Repeat for Kandanur, Kottayur, Tirupathur, Ariyakudi, etc. */}
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
            <br />
            <span className="gradient-text">Contact Us</span> Today!
          </h2>
          <Link
            href="tel:+919876543210"
            className="btn btn-primary rounded-pill px-5"
            role="button"
            data-bs-toggle="button"
          >
            Call Us
          </Link>
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
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-custom-light"
              >
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-body-tertiary"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="serviceSelect"
                className="form-label text-body-tertiary"
              >
                Service
              </label>
              <select className="form-select" id="serviceSelect">
                <option value="">(choose service)</option>
                <option value="AC">AC</option>
                <option value="Fridge">Fridge</option>
                <option value="Washer">Washing Machine</option>
              </select>
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
      <ContactUs />
    </>
  );
}
