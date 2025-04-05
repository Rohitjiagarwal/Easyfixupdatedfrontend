
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */


import Navbar from "../navbar";
import React from "react";
import address from '../../dataStore/addresses.json'

export const metadata = {
    title: 'EasyFix Expert - Washing Machine',
  };
  
  export default function WashingMachinePage({city, brand} : {
    city: keyof typeof address.locations
    brand: string
  }) {
    return (
      <>
        {/* NAVBAR */}
        <Navbar/>
  
        {/* BODY */}
        <section className="breadcrumb mt-7">
          <div className="container-fluid">
            <div className="breadcrumb-content border">
              <div className="breadcrumb-content-item">
                <h2 className="fw-semibold display-5 text-center">
                  {brand} Washing Machine <span className="gradient-text">Service in {city} </span>
                </h2>
                <nav style={{ '--bs-breadcrumb-divider': "'>'" } as React.CSSProperties} aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a className="text-decoration-none text-white" href="#">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Washing Machine Service
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
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
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
  
        <section className="intro my-8">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="p-3 p-md-5 custom-bg custom-border-radius">
                  <h6 className="text-primary text-uppercase section-title">Introduction</h6>
                  <h2 className="fw-bold display-5 section-subtitle">
                    <span className="gradient-text">Washing Machine</span> Service center
                  </h2>
                  <p>
                    Are you facing issues with your washing machine? Whether it’s a minor repair,
                    routine maintenance, or a major breakdown, we are here to provide expert solutions
                    for all your washing machine needs. Our skilled technicians offer top-notch washing
                    machine repair, installation, and servicing for both residential and commercial spaces.
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
                  src="/images/album/washing-machine.png"
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
                <h6 className="text-primary text-uppercase section-title">brands</h6>
              </div>
              <h2 className="fw-bold display-5 section-subtitle">
                Washing Machine <span className="gradient-text">Brands</span> We Service
              </h2>
              <p className="text-custom-light">
                Expert Repair & Maintenance for All Leading Washing Machine Brands
              </p>
            </div>
  
            <div className="row g-6">
              <div className="col-6 col-md-3">
                <div className="brand-service">
                  <a href="/services/washing-machine/lg-washing-machine-service-centre">
                    <img
                      src="/images/album/brands/lg.svg"
                      width="100%"
                      height="100%"
                      alt="lg Washing Machine service center"
                    />
                  </a>
                  <a
                    className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                    href="#"
                  >
                    LG
                  </a>
                </div>
              </div>
              {/* ...repeat brand-service blocks for Samsung, Onida, Panasonic, Haier, Whirlpool, Godrej, IFB, Bosch, etc. */}
              {/* Example for Samsung: */}
              <div className="col-6 col-md-3">
                <div className="brand-service">
                  <a href="/services/washing-machine/samsung-washing-machine-service-centre">
                    <img
                      src="/images/album/brands/samsung.svg"
                      width="100%"
                      height="100%"
                      alt="samsung Washing Machine service center"
                    />
                  </a>
                  <a
                    className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                    href="#"
                  >
                    Samsung
                  </a>
                </div>
              </div>
              {/* ...and so on for other brands: Onida, Panasonic, Haier, Whirlpool, Godrej, IFB, Bosch, etc. */}
            </div>
          </div>
        </section>
  
        <section className="our-service-includes my-9">
          <div className="container">
            <div className="text-center mb-5">
              <div className="w-100 d-flex align-items-center justify-content-center">
                <h6 className="text-primary text-uppercase section-title">
                  Our Washing Machine Services Include
                </h6>
              </div>
              <h2 className="fw-bold display-5 section-subtitle">
                Comprehensive Solutions for <br />
                All Your <span className="gradient-text">Washing Machine</span> Needs
              </h2>
              <p className="text-custom-light">
                At EasyFix Expert, we offer a full range of professional Washing Machine
                services...
              </p>
            </div>
  
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {/* Example card: Washing Machine Installation */}
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
                    <h6 className="card-title m-0">Washing Machine Installation</h6>
                  </div>
                </div>
              </div>
              {/* ...repeat for Washing Machine Repair, Maintenance, Replacement, etc. */}
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
                Washing Machine Repair Services Across <br />
                <span className="gradient-text">Various Regions</span> and Nearby Areas
              </h2>
              <p className="text-custom-light">
                At srikk service centre, we offer a full range of professional
                washing machine services to ensure your home or business stays
                running smoothly. From installation and repairs to routine maintenance...
              </p>
            </div>
  
            <div className="row row-cols-1 g-4 w-md-50 w-100 mx-auto">
              {/* Example location card */}
              <div className="col">
                <a href="/services/air-conditioner/air-conditioner-karaikudi">
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
                        Washing Machine Repair Service Centre in {city}
                      </h6>
                    </div>
                  </div>
                </a>
              </div>
              {/* ...repeat for Aranthangi, Kottayur, Tirupathur, Ariyakudi, etc. */}
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
              Have a Question or Need Assistance?<br />
              <span className="gradient-text">Contact Us</span> Today!
            </h2>
            <a
              href="#"
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
  
          {/* We'll place the external script references in layout.js, but if you want inline: */}
          {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.5.0/dist/sweetalert2.min.css" /> */}
          {/* <Script
            id="google-script"
            dangerouslySetInnerHTML={{
              __html: `
                const scriptURL = "https://script.google.com/macros/s/AKfycbz232FUBK-o9cKorvtRTZ8WEBNWooUsJ_GiKGmL_tA6V0hxPFSoEKNd1GfORWHwk8kQ/exec";
                const form = document.forms["submit-to-google-sheet"];
                form.addEventListener("submit", (e) => {
                  e.preventDefault();
                  var formData = new FormData(form);
                  fetch(scriptURL, { method: "POST", body: formData })
                    .then((response) => {
                      Swal.fire("Done", "Submitted Successfully.", "success");
                    })
                    .catch((error) => {
                      Swal.fire("Error", "Something went wrong. Please try again!", "error");
                    });
                });
              `,
            }}
          /> */}
        </section>
  
        {/* FOOTER */}
        <footer className="footer d-flex align-items-center" id="footer">
          <div className="container">
            <div className="row g-4 p-2 row-cols-sm-3 row-cols-md-4">
              <div className="col-md-4">
                <h2 className="mb-4 fw-bold text-white">EasyFix Expert</h2>
                <p className="footer-brief">
                  An application developer’s typical responsibilities include coding, designing, application
                  management, troubleshooting, monitoring updates and possible security threats, and providing end user
                  support.
                </p>
              </div>
              <div className="col-md-4">
                <h6 className="text-white">Quick Links</h6>
                <ul>
                  <li><a className="cursorp">Home</a></li>
                  <li><a className="cursorp">About</a></li>
                  <li><a className="cursorp">Services</a></li>
                  <li><a className="cursorp">Contact</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h6 className="text-white">Contact Information</h6>
                <ul>
                  <li>
                    <span className="iconcontainer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          fill="inherit"
                          d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"
                        />
                      </svg>
                    </span>
                    {address.locations?.[city]?.line1}, <br/> {address.locations?.[city]?.line2}, <br/> {address.locations?.[city]?.line3}
                  </li>
                  <li>
                    <span className="iconcontainer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          fill="inherit"
                          d="M18.93 20q-2.528 0-5.184-1.266t-4.935-3.555t-3.545-4.935T4 5.07q0-.458.3-.763T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.306.75t-.763.3M6.12 9.654l1.92-1.765q.095-.077.124-.212q.03-.135-.01-.25l-.443-2.12q-.039-.153-.135-.23T7.327 5H5.275q-.115 0-.192.077t-.077.192q.029 1.025.321 2.14t.794 2.245m8.45 8.334q1.014.502 2.16.743q1.148.24 2 .257q.115 0 .192-.077T19 18.72v-2.008q0-.153-.077-.25q-.077-.096-.23-.134l-1.85-.379q-.116-.039-.203-.01q-.086.03-.182.125zm0 0"
                        />
                      </svg>
                    </span>
                    <a href="tel:++917550331197">+91 75503 31197</a>
                    <br />
                    <a href="tel:+918428431197">+91 84284 31197</a>
                  </li>
                  <li>
                    <span className="iconcontainer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          fill="inherit"
                          d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z"
                        />
                      </svg>
                    </span>
                    <a href="mailto:info@easyfixexpert.com">info@easyfixexpert.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <p className="text-center">
                  This website is made with
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                      />
                    </svg>
                  </span>{' '}
                  by{' '}
                  <a href="https://salmank07.github.io/">Pixel Crafted Dreams</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
  
        <div className="call-buton d-sm-none">
          <a className="cc-calto-action-ripple" href="tel:7550331197">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
              />
            </svg>
            <span className="num ms-3">7550331197</span>
          </a>
        </div>
      </>
    );
  }
  