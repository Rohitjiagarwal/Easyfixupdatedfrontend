"use client";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/scss/_bootstrap.scss";
import "@/styles/scss/_fonts.scss";
import "@/styles/scss/_variables.scss";
import "@/styles/scss/main.scss";
import "aos/dist/aos.css";
import Navbar from "../navbar";
import SubFooter from "../subfooter";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import address from "../../public/dataStore/addresses.json";

export const metadata = {
  title: "EasyFix Expert - Washing Machine",
};

export default function WashingMachinePage({
  city,
  brand,
}: {
  city: keyof typeof address.locations;
  brand: string;
}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg, #007bff, #00d4ff)",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-4" data-aos="fade-up">
            Expert {brand} Washing Machine{" "}
            <span className="gradient-text">Service in {city}</span>
          </h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="200">
            Fast, reliable, and affordable repairs for all your washing machine needs.
          </p>
          <Link href="#booking-form" className="btn btn-light btn-lg mt-3 rounded-pill" data-aos="fade-up" data-aos-delay="400">
            Book a Service Now
          </Link>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="breadcrumb py-3 bg-dark text-white">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Washing Machine Service
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="booking-form my-5">
        <div className="container">
          <div className="p-4 w-100 w-md-75 mx-auto shadow bg-white rounded-3">
            <h3 className="text-center mb-4">Book Your Service</h3>
            <form>
              <div className="row g-4 align-items-end">
                <div className="col-md-4">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="col-md-4">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    pattern="[0-9]{10}"
                    placeholder="Enter 10-digit phone number"
                    required
                  />
                </div>
                <div className="col-md-4">
                  <button type="submit" className="btn btn-primary rounded-pill w-100 p-2">
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section my-5">
        <div className="container">
          <h2 className="text-center fw-bold display-5 mb-5" data-aos="fade-up">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body">
                  <img src="/images/album/icon-repair.svg" alt="Repair" className="mb-3" width="50" />
                  <h5 className="card-title">Repairs</h5>
                  <p className="card-text">
                    Fixing leaks, noises, or any malfunctions with precision.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body">
                  <img src="/images/album/icon-maintenance.svg" alt="Maintenance" className="mb-3" width="50" />
                  <h5 className="card-title">Maintenance</h5>
                  <p className="card-text">
                    Routine checkups to keep your machine running smoothly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body">
                  <img src="/images/album/icon-installation.svg" alt="Installation" className="mb-3" width="50" />
                  <h5 className="card-title">Installation</h5>
                  <p className="card-text">
                    Professional setup for new or relocated machines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section my-5 bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold display-5 mb-5" data-aos="fade-up">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <p className="card-text">
                    "Quick and professional service! My washing machine is working like new."
                  </p>
                  <h6 className="card-title mt-3">Priya S.</h6>
                  <p className="text-muted">★★★★★</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <p className="card-text">
                    "Affordable pricing and friendly technicians. Highly recommend!"
                  </p>
                  <h6 className="card-title mt-3">Rahul K.</h6>
                  <p className="text-muted">★★★★☆</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <p className="card-text">
                    "They fixed my machine the same day. Excellent service!"
                  </p>
                  <h6 className="card-title mt-3">Anita M.</h6>
                  <p className="text-muted">★★★★★</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="brands-we-service my-5">
        <div className="container">
          <h2 className="text-center fw-bold display-5 mb-5" data-aos="fade-up">
            Brands We <span className="gradient-text">Service</span>
          </h2>
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-3 text-center">
              <Link href="/services/washing-machine/lg-washing-machine-service-centre">
                <img src="/images/album/brands/lg.svg" alt="LG" className="img-fluid mb-3" />
                <span className="btn btn-outline-primary rounded-pill w-75">LG</span>
              </Link>
            </div>
            <div className="col-6 col-md-3 text-center">
              <Link href="/services/washing-machine/samsung-washing-machine-service-centre">
                <img src="/images/album/brands/samsung.svg" alt="Samsung" className="img-fluid mb-3" />
                <span className="btn btn-outline-primary rounded-pill w-75">Samsung</span>
              </Link>
            </div>
            {/* Add more brands as needed */}
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="map-section my-5">
        <div className="container">
          <h2 className="text-center fw-bold display-5 mb-5" data-aos="fade-up">
            Our Service <span className="gradient-text">Areas</span>
          </h2>
          <div className="shadow rounded-3 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531676!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f1f1f1f1f1!2sEnvato!5e0!3m2!1sen!2sau!4v1633024259435!5m2!1sen!2sau"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* SubFooter */}
      <SubFooter city={city} brand={brand} />
    </>
  );
}