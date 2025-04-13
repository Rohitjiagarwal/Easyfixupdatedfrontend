"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-html-link-for-pages */

// import Swal from "sweetalert2";
import address from "../../public/dataStore/addresses.json";
import SubFooter from "../subfooter";

export default function ACPage({
  city,
  brand,
}: {
  city: keyof typeof address.locations;
  brand: string;
}) {
  // const scriptURL = "https://script.google.com/macros/s/AKfycbz232FUBK-o9cKorvtRTZ8WEBNWooUsJ_GiKGmL_tA6V0hxPFSoEKNd1GfORWHwk8kQ/exec";
  //   const form = document.forms["submit-to-google-sheet" as any];
  //   form.addEventListener("submit", (e) => {
  //       e.preventDefault();
  //       const formData = new FormData(form);

  //       fetch(scriptURL, { method: "POST", body: formData })
  //           .then((response) => {
  //             console.log(response);
  //               Swal.fire("Done", "Submitted Successfully.", "success");
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //               Swal.fire("Error", "Something went wrong. please try again!", "error");
  //           });
  //   });
  return (
    <>
      <div className="navbar-wrap p-4">
        <nav className="nav-main fixed-top border navbar rounded-4 navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="images/album/easy-fix-logo-bg-removed-2.png"
                width="100%"
                height="60px"
                alt="brand logo"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav-main"
              aria-controls="nav-main"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="nav-main">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="air-conditioner.html"
                  >
                    Air Conditioner Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="washing-machine.html">
                    Washing Machine
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {/* <!-- <a className="dropdown-item" href="air-conditioner.html">Air Conditioner</a>
                                <a className="dropdown-item" href="washing-machine.html">Washing Machine</a> --> */}
                    <a className="dropdown-item" href="fridge.html">
                      Fridge
                    </a>
                    <a className="dropdown-item" href="dish-washer.html">
                      Dish Washer
                    </a>
                    <a className="dropdown-item" href="wate-heater.html">
                      Water Heater
                    </a>
                    <a className="dropdown-item" href="oven.html">
                      Oven
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* <!-- BODY --> */}
      <section className="breadcrumb mt-7">
        <div className="container-fluid">
          <div className="breadcrumb-content  border">
            <div className="breadcrumb-content-item">
              <h2 className="fw-semibold display-5 text-center">
                Air Conditioner <span className="gradient-text">Service</span>
              </h2>

              <nav
                style={
                  { "--bs-breadcrumb-divider": ">" } as React.CSSProperties
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
                    Ac Service
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="Booking-htmlForm">
        <div className="container">
          <div className="booking-htmlForm p-4 w-100 w-md-75 mx-auto shadow bg-white custom-border-radius">
            <form action="">
              <div className="row g-4 align-items-end">
                <div className="col-md-4">
                  <label
                    htmlFor="exampleinputEmail1"
                    className="htmlForm-label"
                  >
                    Name
                  </label>
                  <input
                    type="email"
                    className="htmlForm-control"
                    id="exampleinputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="col-md-4">
                  <label
                    htmlFor="exampleinputPassword1"
                    className="htmlForm-label "
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="htmlForm-control"
                    id="exampleinputPassword1"
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
                  are here to provide expert solutions htmlFor all your air
                  conditioning needs. Our skilled technicians offer top-notch AC
                  repair, installation, and servicing htmlFor both residential
                  and commercial spaces.
                </p>

                <ul className="list-group list-group-flush mt-4">
                  <li className="list-group-item d-flex align-items-center">
                    <span className="">
                      <img
                        src="images/album/icon-park-solid--check-one.svg"
                        width="24"
                        height="24"
                        className="me-4"
                        alt="tick-icon"
                      />
                    </span>
                    Skilled Technicians
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className="">
                      <img
                        src="images/album/icon-park-solid--check-one.svg"
                        width="24"
                        height="24"
                        className="me-4"
                        alt="tick-icon"
                      />
                    </span>
                    AfhtmlFordable and Transparent
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className="">
                      <img
                        src="images/album/icon-park-solid--check-one.svg"
                        width="24"
                        height="24"
                        className="me-4"
                        alt="tick-icon"
                      />
                    </span>
                    Quick Service
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className="">
                      <img
                        src="images/album/icon-park-solid--check-one.svg"
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
                src="images/album/pngwing.com (1).png"
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
              Expert Repair & Maintenance htmlFor All Leading AC Brands
            </p>
          </div>

          <div className="row g-6">
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="bluestar-ac-service-centre.html">
                  <img
                    src="images/album/brands/bluestar.avif"
                    width="100%"
                    height="100%"
                    alt="bluestar ac service center"
                  />
                </a>
                <a
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href=""
                >
                  Blue star
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="voltas-ac-service-centre.html">
                  <img
                    src="images/album/brands/voltas-logo-vector.svg"
                    width="100%"
                    height="100%"
                    alt="voltas ac service center"
                  />
                </a>
                <a
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href=""
                >
                  Voltas
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="carrier-ac-service-centre.html">
                  <img
                    src="images/album/brands/Logo_of_the_Carrier_Corporation.svg.png"
                    width="100%"
                    height="100%"
                    alt="carrier ac service center"
                  />
                </a>
                <a
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href=""
                >
                  Carrier
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="hitachi-ac-service-centre.html">
                  <img
                    src="images/album/brands/hitachi.svg"
                    width="100%"
                    height="100%"
                    alt="hitachi ac service center"
                  />
                </a>
                <a
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href=""
                >
                  Hitachi
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="lg-ac-service-centre.html">
                  <img
                    src="images/album/brands/lg.svg"
                    width="100%"
                    height="100%"
                    alt="lg ac service center"
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
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="samsung-ac-service-centre.html">
                  <img
                    src="images/album/brands/samsung.svg"
                    width="100%"
                    height="100%"
                    alt="samsung ac service center"
                  />
                </a>
                <a
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href=""
                >
                  Samsung
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="onida-ac-service-centre.html">
                  <img
                    src="images/album/brands/onida-logo.png"
                    width="100%"
                    height="100%"
                    alt="onida ac service center"
                  />
                </a>
                <a
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href=""
                >
                  Onida
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="panasonic-ac-service-centre.html">
                  <img
                    src="images/album/brands/panasonic-logo.webp"
                    width="100%"
                    height="100%"
                    alt="panasonoic ac service center"
                  />
                </a>
                <a
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href=""
                >
                  Panasonic
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="haier-ac-service-centre.html">
                  <img
                    src="images/album/brands/Haier.svg"
                    width="100%"
                    height="100%"
                    alt="haier ac service center"
                  />
                </a>
                <a
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href=""
                >
                  Haier
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="whirlpool-ac-service-centre.html">
                  <img
                    src="images/album/brands/whirlpool.svg"
                    width="100%"
                    height="100%"
                    alt="whirlpool ac service center"
                  />
                </a>
                <a
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href=""
                >
                  Whirlpool
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="lloyd-ac-service-centre.html">
                  <img
                    src="images/album/brands/lloyd.png"
                    width="100%"
                    height="100%"
                    alt="lloyd ac service center"
                  />
                </a>
                <a
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href=""
                >
                  Lloyd
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="brand-service">
                <a href="ogeneral-ac-service-centre.html">
                  <img
                    src="images/album/brands/ogeneral.svg"
                    width="100%"
                    height="100%"
                    alt="ogeneral ac service center"
                  />
                </a>
                <a
                  className="m-0 text-center w-100 mt-3 d-block custom-bg rounded-pill p-2 text-decoration-none"
                  href=""
                >
                  O General
                </a>
              </div>
            </div>
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
              Comprehensive Solutions htmlFor <br />
              All Your <span className="gradient-text">
                Air Conditioning
              </span>{" "}
              Needs
            </h2>
            <p className="text-custom-light">
              At EasyFix Expert, we offer a full range of professional air
              conditioning services to ensure your home or business stays cool
              and comhtmlFortable throughout the year. From installation and
              repairs to routine maintenance, our expert technicians are
              equipped to handle all your AC needs. No matter the brand or
              model, we deliver fast, reliable, and afhtmlFordable service.
            </p>
          </div>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h6 className="card-title m-0">AC Installation</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h6 className="card-title m-0">AC Repair</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h6 className="card-title m-0">Maintenance & Tune-ups</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h6 className="card-title m-0">AC Replacement</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h6 className="card-title m-0">Emergency Services</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h6 className="card-title m-0">
                    AC unit gas charging and leak repairs
                  </h6>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h6 className="card-title m-0">Dry servicing</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h6 className="card-title m-0">Replacement of compressors</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h6 className="card-title m-0">
                    Replacement of aluminum coils
                  </h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h6 className="card-title m-0">Repairing circuits</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h6 className="card-title m-0">Replacement of capacitors</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <span className="check-mark">
                    <img
                      src="images/album/ion--location-sharp.svg"
                      height="28"
                      width="28"
                      alt="location-icon"
                    />
                  </span>
                  <h6 className="card-title m-0">AC Cleaning</h6>
                </div>
              </div>
            </div>
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
              conditioning services to ensure your home or business stays cool
              and comhtmlFortable throughout the year. From installation and
              repairs to routine maintenance, our expert technicians are
              equipped to handle all your AC needs. No matter the brand or
              model, we deliver fast, reliable, and afhtmlFordable service.
            </p>
          </div>

          <div className="row row-cols-1 g-4 w-md-50 w-100 mx-auto">
            <div className="col">
              <a href="https://www.google.com/maps/place/Karaikudi,+Tamil+Nadu">
                <div className="card h-100">
                  <div className="card-body">
                    <span className="check-mark">
                      <img
                        src="images/album/ion--location-sharp.svg"
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
              </a>
            </div>
            <div className="col">
              <a href="https://www.google.com/maps/place/Aranthangi">
                <div className="card h-100">
                  <div className="card-body">
                    <span className="check-mark">
                      <img
                        src="images/album/ion--location-sharp.svg"
                        height="28"
                        width="28"
                        alt="location-icon"
                      />
                    </span>
                    <h6 className="card-title">
                      Ac Repair Service Centre in Aranthangi
                    </h6>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="https://www.google.com/maps/place/Kottayur">
                <div className="card h-100">
                  <div className="card-body">
                    <span className="check-mark">
                      <img
                        src="images/album/ion--location-sharp.svg"
                        height="28"
                        width="28"
                        alt="location-icon"
                      />
                    </span>
                    <h6 className="card-title">
                      Ac Repair Service Centre in Kottayur
                    </h6>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="https://www.google.com/maps/place/Tirupathur">
                <div className="card h-100">
                  <div className="card-body">
                    <span className="check-mark">
                      <img
                        src="images/album/ion--location-sharp.svg"
                        height="28"
                        width="28"
                        alt="location-icon"
                      />
                    </span>
                    <h6 className="card-title">
                      Ac Repair Service Centre in Tirupathur
                    </h6>
                  </div>
                </div>
              </a>
            </div>

            <div className="col">
              <a href="https://www.google.com/maps/place/Airyakudi">
                <div className="card h-100">
                  <div className="card-body">
                    <span className="check-mark">
                      <img
                        src="images/album/ion--location-sharp.svg"
                        height="28"
                        width="28"
                        alt="location-icon"
                      />
                    </span>
                    <h6 className="card-title">
                      Ac Repair Service Centre in Ariyakudi
                    </h6>
                  </div>
                </div>
              </a>
            </div>
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

        <div className="booking-htmlForm p-4 w-100 w-md-50 mx-auto bg-white rounded-4">
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
                  fill-rule="evenodd"
                  d="M11.25 2.5a2.25 2.25 0 0 0-2.154 2.904l.13.43l-.317.318l-6.254 6.253l-.53-.53l.53.53a.664.664 0 0 0 .94.94L9.848 7.09l.318-.318l.43.13a2.25 2.25 0 0 0 2.685-3.124l-1.5 1.501a.75.75 0 1 1-1.061-1.06l1.5-1.5a2.24 2.24 0 0 0-.97-.22ZM7.5 4.75a3.75 3.75 0 1 1 3.114 3.696L10.061 9l.939.94l.47-.47l.53-.53l.53.53l1.875 1.875a2.164 2.164 0 1 1-3.06 3.06L9.47 12.53L8.94 12l.53-.53l.47-.47l-.94-.94l-4.345 4.345l-.53-.53l.53.53a2.164 2.164 0 1 1-3.06-3.06L5.939 7L3.5 4.56l-.617.617l-.507-.761l-1-1.5l-.341-.512l.435-.434l.5-.5l.434-.435l.512.341l1.5 1l.761.507l-.616.617L7 5.94l.554-.554A4 4 0 0 1 7.5 4.75m4.5 6.31l1.345 1.345a.664.664 0 0 1-.94.94L11.061 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            htmlFor Service Booking
          </h6>
          <form id="submit-to-google-sheet">
            <div className="mb-3">
              <label
                htmlFor="name"
                className="htmlForm-label text-custom-light"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="htmlForm-control"
                id="name"
                aria-describedby="nameHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="phone"
                className="htmlForm-label text-body-tertiary"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="htmlForm-control"
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
      {/* <!-- BODY --> */}

      <SubFooter city={city} brand={brand} />
    </>
  );
}
