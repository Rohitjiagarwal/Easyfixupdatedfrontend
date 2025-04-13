import Navbar from "../navbar";
import React, { useState, useEffect } from "react";
import address from "../../public/dataStore/addresses.json";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "EasyFix Expert - Air Conditioner Services",
};

export default function AirConditionerPage({
  city,
  brand,
}: {
  city: keyof typeof address.locations;
  brand: string;
}) {
  const location = address.locations?.[city as keyof typeof address.locations];
  const [selectedService, setSelectedService] = useState("");
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 800,
          easing: "ease-out",
          once: true,
        });
      });
    }
  }, []);

  const calculateEstimate = () => {
    const pricing = {
      repair: 499,
      maintenance: 999,
      installation: 1999,
      refill: 799,
    };
    setEstimatedCost(pricing[selectedService as keyof typeof pricing] || null);
  };

  return (
    <>
      <Head>
        {/* Fonts & Styles */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />

        {/* Global Styles */}
        <style>{`
          :root {
            --primary-color: #0066FF;
            --primary-dark: #004EC2;
            --secondary-color: #FF6B00;
            --accent-color: #00CCFF;
            --dark-color: #141E30;
            --light-color: #F8F9FF;
            --bg-light: #f0f4ff;
            --bg-light-gradient: linear-gradient(to right, #f8f9ff, #f0f4ff);
            --text-color: #333;
            --purple-gradient: linear-gradient(90deg, #8A2BE2, #DA70D6);
          }

          body {
            font-family: 'Merriweather', serif;
            color: var(--text-color);
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
          }

          .gradient-text {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
          }

          .animated-bg {
            position: absolute;
            animation: pulse 6s ease-in-out infinite alternate;
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }

          @keyframes pulse {
            0% { transform: scale(1) rotate(0deg); opacity: 0.8; }
            100% { transform: scale(1.05) rotate(5deg); opacity: 0.6; }
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }

          .fade-in-1 { animation-delay: 0.2s; }
          .fade-in-2 { animation-delay: 0.4s; }
          .fade-in-3 { animation-delay: 0.6s; }

          .hero-badge {
            transition: all 0.3s ease;
            cursor: default;
          }

          .hero-badge:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }

          .pricing-tier {
            transition: all 0.3s ease;
            position: relative;
            z-index: 1;
          }

          .pricing-tier:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 102, 255, 0.15);
            z-index: 2;
          }

          .pricing-tier.featured {
            border: none;
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
            color: white;
            transform: scale(1.05);
          }

          .pricing-tier.featured:hover {
            transform: translateY(-10px) scale(1.05);
          }

          .service-card {
            background: linear-gradient(135deg, #141E30, #0F1524);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
            transition: all 0.3s ease;
            border-radius: 24px;
            padding: 30px;
            color: #F8F9FF; 
            max-width: 100%;
            overflow: hidden;
            position: relative;
            z-index: 200 !important;
          }

          .service-cards-container {
            position: relative;
            z-index: 300 !important; 
            margin-top: 120px; 
            margin-bottom: 80px; 
            transform: translateY(0); 
          }

          .floating-badge {
            width: auto;
            max-width: calc(100% - 40px);
            margin: 0 auto;
            z-index: 10;
            position: relative;
          }

          .hero-wave {
            position: relative;
            z-index: -1; 
            bottom: 0;
            left: 0;
            width: 100%;
          }

          .hero-section {
            overflow: visible !important; 
            padding-top: 80px; 
          }

          .review-rating {
            display: inline-block;
            position: relative;
            z-index: 55; 
            margin-right: 8px; 
            font-size: 18px;
          }

          .review-rating i {
            margin-right: 3px;
          }

          .text-with-shadow {
            text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.9); 
            font-weight: 600; 
          }

          .navbar {
            z-index: 1000;
          }
        `}</style>
      </Head>

      <Navbar />

      <section
        className="hero-section position-relative overflow-hidden"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f0f4ff",
        }}
      >
        <div
          className="animated-bg"
          style={{
            width: "60%",
            height: "60%",
            background:
              "radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, rgba(0, 102, 255, 0) 70%)",
            top: "5%",
            right: "-20%",
            zIndex: 0,
          }}
        ></div>

        <div
          className="animated-bg"
          style={{
            width: "50%",
            height: "50%",
            background:
              "radial-gradient(circle, rgba(0, 204, 255, 0.1) 0%, rgba(0, 204, 255, 0) 70%)",
            bottom: "10%",
            left: "-20%",
            zIndex: 0,
            animationDelay: "2s",
          }}
        ></div>

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            zIndex: 0,
            opacity: 0.4,
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            <div className={`col-lg-6 ${isVisible ? "fade-in" : "opacity-0"}`}>
              <div
                className="d-inline-flex align-items-center mb-4 px-4 py-2 rounded-pill hero-badge"
                style={{
                  background: "rgba(0, 102, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0, 102, 255, 0.2)",
                }}
                data-aos="fade-down"
              >
                <div
                  className="me-2 rounded-circle d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "rgba(0, 102, 255, 0.2)",
                  }}
                >
                  <i
                    className="bi bi-shield-check text-primary"
                    style={{ fontSize: "16px" }}
                  ></i>
                </div>
                <span className="text-primary fw-medium fs-6">
                  Authorized {brand} Service Partner
                </span>
              </div>

              <h1
                className="display-3 fw-bold text-dark mb-4 lh-sm"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Premium{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #8A2BE2, #DA70D6)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {brand} AC
                </span>
                <br />
                Services in {city}
              </h1>

              <p
                className="lead text-secondary mb-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Experience unparalleled cooling with our expert AC services.
                Fast response times, certified technicians, and satisfaction
                guaranteed.
              </p>

              <div
                className="d-flex flex-wrap gap-3 mb-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link href="#booking" passHref>
                  <button
                    className="btn btn-lg px-4 py-3"
                    style={{
                      background: "linear-gradient(90deg, #8A2BE2, #DA70D6)",
                      color: "white",
                      fontWeight: 600,
                      border: "none",
                      borderRadius: "12px",
                    }}
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Book Now
                  </button>
                </Link>

                <a
                  href="tel:+919876543210"
                  className="btn btn-lg btn-outline-primary px-4 py-3"
                  style={{
                    borderWidth: "2px",
                    fontWeight: 500,
                    borderRadius: "12px",
                  }}
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  Call Us
                </a>
              </div>

              <div className="row g-4" data-aos="fade-up" data-aos-delay="400">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div className="avatar-stack d-flex me-3">
                      {[1, 2, 3].map((_, i) => (
                        <div
                          key={i}
                          className="avatar rounded-circle border-3 border-white"
                          style={{
                            width: "48px",
                            height: "48px",
                            backgroundImage: `url(/images/testimonials/avatar-${
                              i + 1
                            }.jpg)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            marginLeft: i > 0 ? "-15px" : "0",
                            zIndex: 3 - i,
                            transition: "all 0.3s ease",
                          }}
                        ></div>
                      ))}
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <span className="text-warning me-1 fw-bold">4.9</span>
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <i
                            key={i}
                            className="bi bi-star-fill text-warning me-1"
                            style={{ fontSize: "14px" }}
                          ></i>
                        ))}
                      </div>
                      <span
                        className="text-secondary"
                        style={{ fontSize: "14px" }}
                      >
                        From 2,300+ reviews
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle p-3 me-3"
                      style={{ background: "rgba(0, 204, 255, 0.2)" }}
                    >
                      <i className="bi bi-patch-check-fill text-info"></i>
                    </div>
                    <div>
                      <div className="text-dark fw-medium">90-Day Warranty</div>
                      <div
                        className="text-secondary"
                        style={{ fontSize: "14px" }}
                      >
                        On all services
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 d-flex justify-content-center position-relative mt-5 mt-lg-0 hero-card-container"
              data-aos="fade-left"
            >
              <div
                className="position-relative"
                style={{
                  maxWidth: "550px",
                  animation: "float 6s ease-in-out infinite",
                  width: "100%",
                }}
              >
                <div
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{
                    width: "80%",
                    height: "80%",
                    background:
                      "radial-gradient(circle, rgba(0, 204, 255, 0.2) 0%, rgba(0, 102, 255, 0) 70%)",
                    filter: "blur(30px)",
                    zIndex: -1,
                  }}
                ></div>

                <img
                  src="/images/album/pngwing.com (1).png"
                  alt="Professional AC Service"
                  className="img-fluid rounded-4"
                  style={{
                    filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15))",
                    border: "4px solid rgba(255, 255, 255, 0.8)",
                    borderRadius: "30px",
                    width: "100%",
                    maxWidth: "500px",
                    margin: "0 auto",
                    display: "block",
                  }}
                />

                <div
                  className="floating-badge position-absolute p-3 rounded-4"
                  style={{
                    top: "10%",
                    right: "-5%",
                    background: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    zIndex: 2,
                    animation: "float 4s ease-in-out infinite",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      className="p-2 rounded-circle"
                      style={{ background: "rgba(0, 102, 255, 0.1)" }}
                    >
                      <i className="bi bi-lightning-charge-fill text-primary fs-5"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="fw-bold mb-1">Same-Day Service</h6>
                      <p className="mb-0 small text-muted">Quick response</p>
                    </div>
                  </div>
                </div>

                <div
                  className="floating-badge position-absolute p-3 rounded-4"
                  style={{
                    bottom: "15%",
                    left: "-5%",
                    background: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    zIndex: 2,
                    animation: "float 4s ease-in-out 1s infinite",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      className="p-2 rounded-circle"
                      style={{ background: "rgba(255, 107, 0, 0.1)" }}
                    >
                      <i
                        className="bi bi-tools fs-5"
                        style={{ color: "#FF6B00" }}
                      ></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="fw-bold mb-1">Expert Repairs</h6>
                      <p className="mb-0 small text-muted">
                        Certified technicians
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 service-cards-container">
            {[
              {
                icon: "bi-snow",
                title: "AC Repair",
                desc: "Fix any cooling issues",
                gradient:
                  "linear-gradient(145deg, rgba(12, 83, 219, 0.85), rgba(32, 124, 229, 0.75))",
              },
              {
                icon: "bi-gear",
                title: "Maintenance",
                desc: "Regular servicing",
                gradient:
                  "linear-gradient(145deg, rgba(20, 66, 184, 0.85), rgba(32, 87, 203, 0.75))",
              },
              {
                icon: "bi-tools",
                title: "Installation",
                desc: "Expert setup",
                gradient:
                  "linear-gradient(145deg, rgba(37, 49, 154, 0.85), rgba(53, 63, 164, 0.75))",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="col-md-4"
                style={{
                  marginBottom: "1.5rem",
                  transition: "all 0.5s ease",
                  position: "relative",
                  zIndex: 30 + idx,
                }}
              >
                <div
                  className="card service-card border-0 p-4 h-100"
                  style={{
                    borderRadius: "16px",
                    background: service.gradient,
                    borderTop: "1px solid rgba(255, 255, 255, 0.4)",
                    borderLeft: "1px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                    color: "white",
                  }}
                >
                  <div
                    className="rounded-circle p-3 mb-4"
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255, 255, 255, 0.25)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <i
                      className={`bi ${service.icon} fs-4`}
                      style={{ color: "white" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold mb-2">{service.title}</h5>
                  <p className="mb-0">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="service-packages py-5"
        style={{
          background: "var(--bg-light)",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span
              className="badge rounded-pill mb-3 py-2 px-3"
              style={{
                background: "rgba(0, 102, 255, 0.1)",
                color: "var(--primary-color)",
              }}
            >
              OUR PACKAGES
            </span>
            <h2 className="display-5 fw-bold mb-4">
              Choose Your <span className="gradient-text">Service Package</span>
            </h2>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "700px" }}
            >
              We offer customized service plans tailored to your specific air
              conditioning needs
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                name: "Basic",
                price: 499,
                description: "Essential service for operational ACs",
                features: [
                  "AC Inspection",
                  "Performance Check",
                  "Minor Adjustments",
                  "Basic Cleaning",
                  "30-Day Warranty",
                ],
                isPopular: false,
                color: "#ffffff",
                btnClass: "btn-outline-primary",
              },
              {
                name: "Standard",
                price: 999,
                description: "Comprehensive care for your air conditioner",
                features: [
                  "Deep Cleaning",
                  "Filter Replacement",
                  "Gas Refill",
                  "Electrical Check",
                  "3 Months Warranty",
                ],
                isPopular: true,
                color: "linear-gradient(135deg, #0066FF 0%, #004EC2 100%)",
                btnClass: "btn-light",
              },
              {
                name: "Premium",
                price: 1499,
                description: "Complete protection for optimal performance",
                features: [
                  "Advanced Diagnostics",
                  "Component Inspection",
                  "Full System Service",
                  "Anti-bacterial Treatment",
                  "6 Months Warranty",
                ],
                isPopular: false,
                color: "#ffffff",
                btnClass: "btn-outline-primary",
              },
            ].map((pkg, idx) => (
              <div
                className="col-lg-4 col-md-6"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div
                  className={`card border h-100 pricing-tier ${
                    pkg.isPopular ? "featured" : ""
                  }`}
                  style={{
                    borderRadius: "20px",
                    background:
                      typeof pkg.color === "string" &&
                      pkg.color.includes("gradient")
                        ? pkg.color
                        : pkg.color,
                    borderColor: pkg.isPopular ? "transparent" : "#e1e6ef",
                  }}
                >
                  {pkg.isPopular && (
                    <div
                      className="position-absolute"
                      style={{
                        top: "-15px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <span className="badge bg-warning rounded-pill px-3 py-2 fw-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="card-body p-5">
                    <h3
                      className={`fw-bold mb-1 ${
                        pkg.isPopular ? "text-white" : ""
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`mb-4 small ${
                        pkg.isPopular ? "text-white opacity-75" : "text-muted"
                      }`}
                    >
                      {pkg.description}
                    </p>

                    <div
                      className={`d-flex align-items-baseline mb-4 ${
                        pkg.isPopular ? "text-white" : ""
                      }`}
                    >
                      <span className="display-4 fw-bold">₹{pkg.price}</span>
                      <span
                        className={`ms-2 ${
                          pkg.isPopular ? "opacity-75" : "text-muted"
                        }`}
                      >
                        one-time
                      </span>
                    </div>

                    <ul
                      className={`list-unstyled mb-4 ${
                        pkg.isPopular ? "text-white" : ""
                      }`}
                    >
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="mb-3 d-flex align-items-center">
                          <div
                            className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: "24px",
                              height: "24px",
                              background: pkg.isPopular
                                ? "rgba(255, 255, 255, 0.2)"
                                : "rgba(0, 102, 255, 0.1)",
                            }}
                          >
                            <i
                              className="bi bi-check2 small"
                              style={{
                                color: pkg.isPopular
                                  ? "#fff"
                                  : "var(--primary-color)",
                              }}
                            ></i>
                          </div>
                          <span className={pkg.isPopular ? "opacity-90" : ""}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`btn ${pkg.btnClass} w-100 py-3 fw-medium`}
                      style={{
                        borderRadius: "12px",
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <div className="d-inline-flex align-items-center px-4 py-3 rounded-3 bg-light">
              <i className="bi bi-info-circle text-primary me-3"></i>
              <p className="mb-0">
                Need a custom plan?{" "}
                <Link href="#contact" passHref>
                  <span className="fw-bold text-decoration-none">
                    Contact us
                  </span>
                </Link>{" "}
                for a tailored solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="get-estimate-section py-5"
        style={{
          background: "linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%)",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="position-absolute"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(138, 43, 226, 0.05) 0%, rgba(138, 43, 226, 0) 70%)",
            top: "5%",
            left: "-10%",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>

        <div
          className="position-absolute"
          style={{
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(218, 112, 214, 0.07) 0%, rgba(218, 112, 214, 0) 70%)",
            bottom: "10%",
            right: "-5%",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="card border-0 shadow-lg"
                id="booking"
                style={{
                  borderRadius: "24px",
                  background: "white",
                  overflow: "hidden",
                }}
              >
                <div className="row g-0">
                  {/* Service Selection Column - Now on LEFT side */}
                  <div className="col-md-6">
                    <div className="p-5">
                      <h4 className="fw-bold mb-4" data-aos="fade-up">
                        Select Your Service
                      </h4>

                      <div
                        className="mb-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        {[
                          {
                            id: "repair",
                            name: "AC Repair",
                            description:
                              "Fixing cooling issues and component failures",
                            icon: "tools",
                          },
                          {
                            id: "maintenance",
                            name: "AC Maintenance",
                            description: "Regular servicing and cleaning",
                            icon: "gear",
                          },
                          {
                            id: "installation",
                            name: "AC Installation",
                            description: "Professional mounting and setup",
                            icon: "box-seam",
                          },
                          {
                            id: "refill",
                            name: "Gas Refill",
                            description: "Refrigerant top-up and leak fixing",
                            icon: "droplet-half",
                          },
                        ].map((service, idx) => (
                          <div
                            key={idx}
                            className={`card mb-3 border cursor-pointer ${
                              selectedService === service.id
                                ? "border-primary"
                                : ""
                            }`}
                            onClick={() => setSelectedService(service.id)}
                            style={{
                              borderRadius: "16px",
                              background:
                                selectedService === service.id
                                  ? "rgba(0, 102, 255, 0.05)"
                                  : "white",
                              borderWidth:
                                selectedService === service.id ? "2px" : "1px",
                              transition: "all 0.3s ease",
                              transform:
                                selectedService === service.id
                                  ? "translateY(-2px)"
                                  : "none",
                            }}
                          >
                            <div className="card-body p-3">
                              <div className="d-flex align-items-center">
                                <div
                                  className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    background:
                                      selectedService === service.id
                                        ? "rgba(0, 102, 255, 0.2)"
                                        : "rgba(0, 102, 255, 0.05)",
                                    transition: "all 0.3s ease",
                                  }}
                                >
                                  <i
                                    className={`bi bi-${service.icon} ${
                                      selectedService === service.id
                                        ? "text-primary"
                                        : "text-secondary"
                                    }`}
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                                <div>
                                  <h5 className="mb-1 fw-medium">
                                    {service.name}
                                  </h5>
                                  <p className="mb-0 text-muted small">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        className="btn btn-primary btn-lg w-100 py-3"
                        onClick={calculateEstimate}
                        data-aos="fade-up"
                        data-aos-delay="200"
                        style={{
                          background:
                            "linear-gradient(90deg, #8A2BE2, #DA70D6)",
                          border: "none",
                          borderRadius: "12px",
                          fontWeight: "600",
                          boxShadow: "0 10px 20px rgba(138, 43, 226, 0.2)",
                        }}
                      >
                        Calculate Estimate
                      </button>

                      <p
                        className="text-center mt-4 mb-0 text-muted small"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        Or call us directly for personalized assistance
                        <br />
                        <a
                          href="tel:+919876543210"
                          className="fw-bold text-decoration-none"
                          style={{ color: "#8A2BE2" }}
                        >
                          +91 98765 43210
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Price Estimate Column - Now on RIGHT side */}
                  <div
                    className="col-md-6"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, rgba(0, 204, 255, 0.1) 100%)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div className="p-5 h-100 d-flex flex-column justify-content-center">
                      <h3 className="display-6 fw-bold mb-4" data-aos="fade-up">
                        Get Instant{" "}
                        <span className="gradient-text">Price Estimate</span>
                      </h3>
                      <p
                        className="lead mb-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        Select a service to see our transparent pricing. No
                        hidden fees, no surprises.
                      </p>

                      <div
                        className="mb-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <div className="d-flex align-items-center mb-3">
                          <div
                            className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: "36px",
                              height: "36px",
                              background: "rgba(0, 102, 255, 0.1)",
                            }}
                          >
                            <i className="bi bi-check-circle text-primary"></i>
                          </div>
                          <span className="text-dark">
                            Certified technicians
                          </span>
                        </div>

                        <div className="d-flex align-items-center mb-3">
                          <div
                            className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: "36px",
                              height: "36px",
                              background: "rgba(0, 102, 255, 0.1)",
                            }}
                          >
                            <i className="bi bi-clock text-primary"></i>
                          </div>
                          <span className="text-dark">
                            Same-day service available
                          </span>
                        </div>

                        <div className="d-flex align-items-center">
                          <div
                            className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: "36px",
                              height: "36px",
                              background: "rgba(0, 102, 255, 0.1)",
                            }}
                          >
                            <i className="bi bi-shield-check text-primary"></i>
                          </div>
                          <span className="text-dark">
                            90-day service warranty
                          </span>
                        </div>
                      </div>

                      {estimatedCost !== null && (
                        <div
                          className="mt-4 p-4 rounded-4"
                          data-aos="fade-up"
                          data-aos-delay="300"
                          style={{
                            background: "rgba(255, 255, 255, 0.8)",
                            border: "1px solid rgba(0, 102, 255, 0.2)",
                            boxShadow: "0 10px 30px rgba(0, 102, 255, 0.1)",
                          }}
                        >
                          <h5 className="fw-bold mb-2">Your Estimate</h5>
                          <div className="d-flex align-items-baseline">
                            <span className="display-5 fw-bold text-primary">
                              ₹{estimatedCost}
                            </span>
                            <span className="ms-2 text-muted">one-time</span>
                          </div>
                          <p className="text-muted mb-0 small">
                            Final price may vary based on specific requirements
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="live-reviews py-5"
        style={{
          background: "var(--light-color)",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0, 102, 255, 0.03) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            opacity: 0.7,
            zIndex: 0,
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-5" data-aos="fade-up">
            <span
              className="badge rounded-pill mb-3 py-2 px-3"
              style={{
                background: "rgba(0, 102, 255, 0.1)",
                color: "var(--primary-color)",
              }}
            >
              TESTIMONIALS
            </span>
            <h2 className="display-5 fw-bold mb-4">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Read what our satisfied customers have to say about our AC
              services
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                name: "Rahul Sharma",
                review:
                  "The technicians were professional and fixed my AC in record time. Excellent service and fair pricing. Would definitely recommend to anyone!",
                rating: 5,
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                date: "2 weeks ago",
                location: "Powai",
              },
              {
                name: "Priya Patel",
                review:
                  "My AC wasn't cooling properly, but after their service visit, it works like new again. The technician was knowledgeable and explained everything.",
                rating: 4,
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                date: "1 month ago",
                location: "Andheri",
              },
              {
                name: "Amit Desai",
                review:
                  "I've tried many AC service companies before, but EasyFix truly stands out. They were punctual, efficient, and reasonably priced.",
                rating: 5,
                image: "https://randomuser.me/api/portraits/men/62.jpg",
                date: "3 weeks ago",
                location: "Bandra",
              },
              {
                name: "Sneha Joshi",
                review:
                  "The annual maintenance contract is worth every penny. Their team is prompt and always available when needed. Highly recommended!",
                rating: 5,
                image: "https://randomuser.me/api/portraits/women/26.jpg",
                date: "2 months ago",
                location: "Worli",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div
                  className="card h-100 shadow-sm border-0 review-card"
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    background: "linear-gradient(135deg, #fff, #f8f9ff)",
                    border: "1px solid #e1e6ef",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0, 0, 0, 0.05)";
                  }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="rounded-circle me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          border: "2px solid var(--primary-color)",
                        }}
                      />
                      <div>
                        <h5 className="mb-0 fw-bold">{review.name}</h5>
                        <p className="text-muted mb-0 small">
                          {review.location}
                        </p>
                      </div>
                    </div>
                    <div className="mb-3">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi ${
                            i < review.rating ? "bi-star-fill" : "bi-star"
                          } me-1`}
                          style={{
                            color: i < review.rating ? "#FFD700" : "#d0d0d0",
                            fontSize: "16px",
                          }}
                        ></i>
                      ))}
                      <span className="ms-2 text-muted small">
                        {review.date}
                      </span>
                    </div>
                    <p
                      className="text-secondary mb-0"
                      style={{ fontStyle: "italic" }}
                    >
                      {review.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center mt-5" data-aos="fade-up">
        <Link href="#all-reviews">
          <button className="btn btn-outline-primary px-4 py-2 rounded-pill">
            See All Reviews <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </Link>
      </div>

      <section
        className="trusted-companies py-5"
        style={{
          background: "var(--bg-light)",
          padding: "40px 0",
          overflow: "hidden",
        }}
      >
        <div className="container-fluid">
          <div className="text-center mb-4" data-aos="fade-up">
            <h2 className="h3 fw-bold mb-0">
              Trusted by <span className="gradient-text">Leading Brands</span>
            </h2>
          </div>

          <div className="position-relative" style={{ padding: "20px 0" }}>
            <div
              className="logos-slide"
              style={{
                display: "flex",
                animation: "scroll 25s linear infinite",
                width: "calc(250px * 12)",
              }}
            >
              {[...Array(3)].map((_, setIdx) => (
                <React.Fragment key={setIdx}>
                  {[
                    "/images/album/brands/samsung.svg",
                    "/images/album/brands/panasonic-logo.webp",
                    "/images/album/brands/bluestar.avif",
                    "/images/album/brands/haier.svg",
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="logo-item"
                      style={{
                        minWidth: "250px",
                        padding: "0 25px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={logo}
                        alt={`${
                          ["Samsung", "Panasonic", "Blue Star", "Haier"][idx]
                        } logo`}
                        style={{
                          height: "60px",
                          maxWidth: "180px",
                          objectFit: "contain",
                          filter: "grayscale(100%)",
                          opacity: 0.7,
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.filter = "grayscale(0%)";
                          e.currentTarget.style.opacity = "1";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.filter = "grayscale(100%)";
                          e.currentTarget.style.opacity = "0.7";
                        }}
                      />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div
              className="logos-slide-reverse"
              style={{
                display: "flex",
                animation: "scroll-reverse 30s linear infinite",
                width: "calc(250px * 12)",
                marginTop: "30px",
              }}
            >
              {[...Array(3)].map((_, setIdx) => (
                <React.Fragment key={setIdx}>
                  {[
                    "/images/album/brands/haier.svg",
                    "/images/album/brands/bluestar.avif",
                    "/images/album/brands/panasonic-logo.webp",
                    "/images/album/brands/samsung.svg",
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="logo-item"
                      style={{
                        minWidth: "250px",
                        padding: "0 25px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={logo}
                        alt={`${
                          ["Haier", "Blue Star", "Panasonic", "Samsung"][idx]
                        } logo`}
                        style={{
                          height: "60px",
                          maxWidth: "180px",
                          objectFit: "contain",
                          filter: "grayscale(100%)",
                          opacity: 0.7,
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.filter = "grayscale(0%)";
                          e.currentTarget.style.opacity = "1";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.filter = "grayscale(100%)";
                          e.currentTarget.style.opacity = "0.7";
                        }}
                      />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-250px * 4));
            }
          }

          @keyframes scroll-reverse {
            0% {
              transform: translateX(calc(-250px * 4));
            }
            100% {
              transform: translateX(0);
            }
          }

          .logos-slide {
            animation: scroll 25s linear infinite;
          }

          .logos-slide-reverse {
            animation: scroll-reverse 30s linear infinite;
          }

          .logos-slide:hover,
          .logos-slide-reverse:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      <section
        className="faq-section py-5"
        style={{
          background: "var(--bg-light-gradient)",
          padding: "100px 0 120px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="position-absolute"
          style={{
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(0, 102, 255, 0.05) 0%, rgba(0, 102, 255, 0) 70%)",
            top: "10%",
            right: "5%",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>

        <div
          className="position-absolute"
          style={{
            width: "250px",
            height: "250px",
            background:
              "radial-gradient(circle, rgba(0, 204, 255, 0.07) 0%, rgba(0, 204, 255, 0) 70%)",
            bottom: "5%",
            left: "5%",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-5" data-aos="fade-up">
            <div
              className="d-inline-block mb-3 px-4 py-2 rounded-pill"
              style={{
                background: "rgba(0, 102, 255, 0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="fw-medium"
                style={{
                  color: "var(--primary-color)",
                  letterSpacing: "1px",
                  fontSize: "14px",
                  textTransform: "uppercase",
                }}
              >
                <i className="bi bi-question-circle-fill me-2"></i>
                COMMON QUESTIONS
              </span>
            </div>

            <h2
              className="display-5 fw-bold mb-4"
              style={{
                color: "#141E30",
              }}
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>

            <p
              className="lead text-muted mx-auto mb-5"
              style={{ maxWidth: "700px" }}
            >
              Find quick answers to our most commonly asked questions about our
              AC services
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion custom-accordion" id="faqAccordion">
                {[
                  {
                    icon: "bi-clock",
                    question: "How often should I service my AC?",
                    answer:
                      "We recommend servicing your AC unit at least twice a year for optimal performance. Regular maintenance before summer and winter seasons ensures efficient operation, extends the lifespan of your unit, and prevents unexpected breakdowns during peak usage periods.",
                  },
                  {
                    icon: "bi-credit-card",
                    question: "What payment methods do you accept?",
                    answer:
                      "We accept cash, all major credit/debit cards, UPI payments (including Google Pay, PhonePe, and Paytm), and bank transfers. We can also accommodate installment payment plans for larger installation jobs.",
                  },
                  {
                    icon: "bi-stopwatch",
                    question: "How long does a typical AC service take?",
                    answer:
                      "A standard AC maintenance service typically takes 60-90 minutes for a residential unit. Repairs may require additional time depending on the complexity of the issue. Our technicians will provide a time estimate before beginning any work.",
                  },
                  {
                    icon: "bi-shield-check",
                    question: "Do you offer any warranty on your services?",
                    answer:
                      "Yes, all our repair and maintenance services come with a 90-day warranty. For parts replacement, we offer warranties ranging from 6 months to 1 year depending on the manufacturer's terms. Our AC installation services include a comprehensive 1-year service warranty.",
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="accordion-item mb-3"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    style={{
                      borderRadius: "16px",
                      border: "1px solid rgba(0, 102, 255, 0.1)",
                      background: "white",
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(0, 102, 255, 0.15)";
                      e.currentTarget.style.borderColor =
                        "rgba(0, 102, 255, 0.3)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 4px 20px rgba(0, 0, 0, 0.05)";
                      e.currentTarget.style.borderColor =
                        "rgba(0, 102, 255, 0.1)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <h2 className="accordion-header" id={`faqHeading${idx}`}>
                      <button
                        className="accordion-button collapsed p-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faqCollapse${idx}`}
                        aria-expanded="false"
                        aria-controls={`faqCollapse${idx}`}
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#141E30",
                          borderBottom: "none",
                          background: "white",
                        }}
                      >
                        <div
                          className="me-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: "36px",
                            height: "36px",
                            minWidth: "36px",
                            background: "rgba(0, 102, 255, 0.08)",
                            borderRadius: "50%",
                          }}
                        >
                          <i
                            className={`bi ${faq.icon} text-primary`}
                            style={{ fontSize: "18px" }}
                          ></i>
                        </div>
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`faqCollapse${idx}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`faqHeading${idx}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div
                        className="accordion-body p-4 pt-0"
                        style={{
                          paddingLeft: "72px",
                          color: "#4a5568",
                          lineHeight: "1.7",
                        }}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-5" data-aos="fade-up">
                <p className="mb-4">Still have questions?</p>
                <Link href="#contact">
                  <button
                    className="btn px-4 py-2"
                    style={{
                      background: "linear-gradient(90deg, #8A2BE2, #DA70D6)",
                      color: "white",
                      fontWeight: 600,
                      border: "none",
                      borderRadius: "50px",
                      padding: "12px 30px",
                      boxShadow: "0 10px 20px rgba(0, 102, 255, 0.15)",
                    }}
                  >
                    <i className="bi bi-chat-dots-fill me-2"></i>
                    Contact Our Support Team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="footer pt-5"
        style={{
          background: "#f0f4ff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 102, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            opacity: 0.5,
            zIndex: 0,
          }}
        ></div>
        <div
          className="position-absolute"
          style={{
            width: "300px",
            height: "300px",
            background:
              "linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, rgba(0, 102, 255, 0) 70%)",
            top: "10%",
            right: "-100px",
            filter: "blur(40px)",
            zIndex: 0,
          }}
        ></div>

        <div
          className="container pt-3 pb-5 position-relative"
          style={{ zIndex: 1 }}
        >
          <div className="row g-4">
            <div className="col-lg-4 pe-lg-5">
              <div className="mb-4">
                <div className="mb-3">
                  <img
                    src="/images/album/Logo_footer.png"
                    alt="EasyFix Expert Logo"
                    style={{
                      height: "120px",
                      width: "auto",
                      maxWidth: "100%",
                      objectFit: "contain",
                      marginBottom: "10px",
                    }}
                  />
                </div>
                <p className="text-secondary">
                  Your trusted partner for professional AC services. We provide
                  expert repairs, maintenance, and installation for all air
                  conditioner brands with guaranteed satisfaction.
                </p>
              </div>

              <div className="social-links mb-4">
                <div className="d-flex gap-3">
                  {["facebook", "twitter", "instagram", "linkedin"].map(
                    (social, idx) => (
                      <Link key={idx} href={`#${social}`} passHref>
                        <div
                          className="social-icon d-inline-flex align-items-center justify-content-center"
                          style={{
                            width: "38px",
                            height: "38px",
                            background: "rgba(138, 43, 226, 0.1)",
                            color: "#8A2BE2",
                            transition: "all 0.3s ease",
                            border: "1px solid rgba(138, 43, 226, 0.2)",
                            borderRadius: "50%",
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.background =
                              "var(--purple-gradient)";
                            e.currentTarget.style.color = "white";
                            e.currentTarget.style.transform =
                              "translateY(-3px)";
                            e.currentTarget.style.boxShadow =
                              "0 5px 15px rgba(138, 43, 226, 0.3)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background =
                              "rgba(138, 43, 226, 0.1)";
                            e.currentTarget.style.color = "#8A2BE2";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <i className={`bi bi-${social}`}></i>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>

              <div className="contact-info">
                <div className="d-flex mb-3 align-items-center">
                  <div
                    className="icon me-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "rgba(0, 102, 255, 0.1)",
                    }}
                  >
                    <i
                      className="bi bi-geo-alt text-primary"
                      style={{ fontSize: "14px" }}
                    ></i>
                  </div>
                  <p className="mb-0 text-secondary">
                    {location?.line1 || "123 Service Road, Industrial Area"},
                    <br />
                    {location?.line2 || ""}
                    <br />
                    {location?.line3 || ""}
                  </p>
                </div>

                <div className="d-flex mb-3 align-items-center">
                  <div
                    className="icon me-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "rgba(0, 102, 255, 0.1)",
                    }}
                  >
                    <i
                      className="bi bi-telephone text-primary"
                      style={{ fontSize: "14px" }}
                    ></i>
                  </div>
                  <div>
                    <a
                      href="tel:+919876543210"
                      className="text-secondary text-decoration-none hover-link"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div
                    className="icon me-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "rgba(0, 102, 255, 0.1)",
                    }}
                  >
                    <i
                      className="bi bi-envelope text-primary"
                      style={{ fontSize: "14px" }}
                    ></i>
                  </div>
                  <div>
                    <a
                      href="mailto:info@easyfixexpert.com"
                      className="text-secondary text-decoration-none hover-link"
                    >
                      info@easyfixexpert.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div
                style={{
                  borderLeft: "1px solid rgba(0, 102, 255, 0.1)",
                  paddingLeft: "1.5rem",
                  height: "100%",
                }}
              >
                <h5 className="fw-bold mb-4 text-dark">Quick Links</h5>
                <ul className="list-unstyled">
                  {[
                    "Home",
                    "About Us",
                    "Services",
                    "Our Work",
                    "Blog",
                    "Contact",
                  ].map((link, idx) => (
                    <li key={idx} className="mb-3">
                      <Link
                        href={`/${link.toLowerCase().replace(" ", "-")}`}
                        className="text-decoration-none text-secondary"
                        style={{ transition: "all 0.3s ease" }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "var(--primary-color)";
                          e.currentTarget.style.paddingLeft = "5px";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = "";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        <i className="bi bi-chevron-right me-2 small text-primary"></i>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="col-lg-2 col-md-6">
              <div
                style={{
                  borderLeft: "1px solid rgba(0, 102, 255, 0.1)",
                  paddingLeft: "1.5rem",
                  height: "100%",
                }}
              >
                <h5 className="fw-bold mb-4 text-dark">Our Services</h5>
                <ul className="list-unstyled">
                  {[
                    "AC Repair",
                    "AC Installation",
                    "AC Maintenance",
                    "Gas Refill",
                    "Annual Service",
                    "Spare Parts",
                  ].map((service, idx) => (
                    <li key={idx} className="mb-3">
                      <Link
                        href={`/services/${service
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="text-decoration-none text-secondary"
                        style={{ transition: "all 0.3s ease" }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "var(--primary-color)";
                          e.currentTarget.style.paddingLeft = "5px";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = "";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        <i className="bi bi-chevron-right me-2 small text-primary"></i>
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <h5 className="fw-bold mb-4 text-dark">
                Subscribe to Our Newsletter
              </h5>
              <p className="text-secondary">
                Get maintenance tips, special offers, and updates delivered to
                your inbox.
              </p>
              <form className="mb-4">
                <div
                  className="input-group"
                  style={{
                    background: "white",
                    padding: "5px",
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 102, 255, 0.2)",
                  }}
                >
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Your email address"
                    style={{
                      background: "transparent",
                      color: "#333",
                      paddingLeft: "15px",
                    }}
                  />
                  <button
                    type="submit"
                    className="btn px-4"
                    style={{
                      background: "linear-gradient(90deg, #8A2BE2, #DA70D6)",
                      color: "white",
                      fontWeight: 600,
                      border: "none",
                      boxShadow: "0 4px 10px rgba(138, 43, 226, 0.2)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 15px rgba(138, 43, 226, 0.3)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 10px rgba(138, 43, 226, 0.2)";
                    }}
                  >
                    <i className="bi bi-send me-2"></i>
                    Subscribe
                  </button>
                </div>
              </form>

              <div
                className="payment-methods p-3"
                style={{
                  background: "white",
                  borderRadius: "12px",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0, 102, 255, 0.1)",
                }}
              >
                <h6 className="fw-semibold mb-3 text-dark">Payment Methods</h6>
                <div className="d-flex flex-wrap gap-3">
                  {[
                    {
                      name: "Visa",
                      logo: "https://cdn.worldvectorlogo.com/logos/visa-10.svg",
                    },
                    {
                      name: "Mastercard",
                      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAA5FBMVEXrABv3nhv/////XwDqAAD3mgD3mAD/YgD3oBz2lgD/XQDrABr/WgD2ohzrABf3nRfrABH5s13rAAz/+vv/+/byMhX8WAj84OL95uj+9Oj+8vT3sbXtOUX6hRL8eQ77fhD4mRn5kRbzhoz95cv71qz83r33oyr7zpv60tX969byeYD5t2buRlD4Sw3+agf6jBXwXWb4vL/6yI/5vnj1mZ7vUFr2pqv4uLzsJDP0kJX4q0f5xsr706b4r1L96NDxLRb5unPxbXXtKDj4qTzwZW3vV1/1n6X1QBHtO0bsFSjyf4b6zc9EFLKbAAAKQUlEQVR4nO2daXfaOBuGhSMpGDI22wxh6XTesIWEzpQlJCHQCRA6Jfz///PKBhJjy7v9WD6H+1PbD9XhOs8uWUJSdCpXd43J+3Lza7VFTNvtavC2vJk2dtcRLvKhWr8zH43vF+tuNpPJZLvr2f141Gu3alEugqL5b6qPz5st1lQqFRQlr+HJ5xWlUCrp/7r6/jyMDFKt1btfUyZCVKbMXtofCaFUlrvFUSciSBHg2U0eCoxAQUG2yisape3btBp2sVr7vqtzydiLYaJULfZ+hP9tIfFcTzcuZAzSGCnLx3rQxSqd1wxD40TmhJFMiu2QVhQGz/VkxdDkPaExIhpMAxCqtBeyVzSfjChd98IQCoynPtXY+EJz9DTmig+P/lbrFGXqE82REJHX80rQXxkQz+4tIJuDGKF3z3GoNiIB2RxtSL4PGIcC4WGGU/LnUxwbYib04mWxVtG3T1lF6Lod5Jf6x1OelLC3UOxuQk8Nt9U6azk0G10qJT3/PuYXT/kZRwRHk4KRI6BONpRXmQAROvILyCeeCcZhvcoMaDu0hdONEI4uQnsx4mmgiOHsATVveYv1Z1HD0USznZjwVH9F6FZGFfCbpRCqvEYUc8xS6awfB567UJncWSU8PV2sTUgscHRA8jhyPC8FHBscpKX5pqFjrc1obHA0EbUVLZ5lTH71qQL+eVxsHkfQOZFnA/KE53Ybq+nslccDPQJVFvGazl4k6ykCecEzid109iphVka3Yow6Rqmylxzvjqf8EEM250vBz72YEhZHtBgBnioqAcFhyn+7BKOjOZjrrMMNzxDIsXT9e3GRu/grC8ZHpW41ogueCZhjMf1+ecH45P6B45NxC0DOeO4AMtaH/tPoMF19+Q2OD3XO8I54vkPS+Xagw/h8heRzHxTPQzJ0GJ8/AfmQRTA8g6ToCMTHHk+CdMThY4snMc8Sio8dHtCo/J+FDnB8Jnbx2QZPIhndxOcLYP1jl9/5eJ4h6fzOpcP4QNaHNkNoLp5HSDr/2tBhBTRgf5GRuf0FD08VspPI28HR+i8Vkg9vAMTBU1cAu1D0hz2ei9zfgOFZVTmbYBw8A8AJBieln4SfpNO7Fc+NCGE5mfA8csezg6SjuNCBDs+WcxxmPGXI8Zdj4DmGH0A8KjGHHzOe75CBh18PmtzrKyAfS/VswgNa8bi7ls4H0r3M09VTPKK51t69ILO7yb1O8SyTb7U45gPZfJFXezygWSvvkQ6zH9Di+Yctnqf4zmBY9c0rnYscZHGoru3wTMXoRDnu9T/I6Nzm4ylDdqIe4/LBfGCLHz4eoboJk/lA9hZkxMNTBzWenB86F7lLQDwZWuHgAZ2f+jMeaPMZW/HAGo8/OJr5ACYvg/l84HkX2XgSiz4oEePxF3l084FsLT7N54hnImrN82E+kLUP6ZnwIPF60QTNR82e4hmKN8iwmE8Sg40DngFkt+W1VTeZD+RcTF0Y8VxDGo/vrH7AA1oayjUDHiE2jd2URG5H8IHZ+yTDZD5/QnpX9hPPLahvBTQexgeODgvO/Q88AvfqRiXgXSg1vpWId6H0+BbjA5q7+gc8wjcUR8E3FhqeJugEPoz1gHrXbI9H9GbdgAd86oNS0W8ddfUXJJ6WjiclaV3HA53aGZ5faQk9CQQfJPD2FgcP7MxQwwNa9XjfWLfhA0hHq3yQuFvHPEFvJyPpDvI8WLjIzKwH9DDLmOEBHRSGi8zQsXnB8KQoMgMfRsgQCdVB+9EwNbOOB7RuliuomqbEBT4SQylqKTQBb+egVOV16JlGG6Vik8KAB7Tr6iHQsifYBqBRwIUPektT2QO9V/qKHlKGB7QuLKJmOnYpksEzQ0+QRXMEeEDP8HbRNk09BXRX0QVkk0I82TMeR53xnPEEVvYcmp3UPSd2B6lr4LIwZVXz7NxUOOEpoqX4R3ZP8AC3pOeBhr3I+DwOc8LTQ43zMNUeTxu9nEfxtqKt80aOg+T+eRvQCU8FSaHfSvKjVG0iq6qEpFTVhdBfLSHRv7E14QE+XIikVGV22MTVhj48F+aTAd16QG9D0A7PpemAD+zRS6If3E3R8TDow2EanhR1XUkc+05RW3EF+AbK8aOB9Jz7hr8pAkF/xB7qgyXwT9k1PD/TUvnATjPmBzygTXt6PpasHT+13abjEAtsWu9+fImcktSe1IfaKfEu6I7i45KIVHhXAr51wJOKT7WTuP8JHW4OA8STjgtqKsbrjTbi75XC1oTFk9ufUtB3gU7C5Nbp1WrCB+ckAvMnHuG/PIH9inRuwiN62w58Y7xkwiN65ZzwpaCCXzSS0J2ghguJhb5K4+ofQDqG+6w/8YgcfWDPo3Kvsxa5s4BNW4Z38IwvDRREvVYW+BkziY9H2O1k2IK5Y4NH1EvEYJ/xmEl2eAQdi0HfSmOHR8zDLIk9UmHBI+Kl38lc883HI+BgA/Z1wJYjHvFe6IJ9ncv8NLLlZUlY93J/WTJJ1+LgEeXF3wOdiwxkvWx599f6bKtQO+6g3YQ8t8DgPPqb+Ev1BjqJvrrJxyNtIYtnp/ADG3i6HBQ8PNeCTMZAd7ZUWvOIR9pB8rGtfnIJv4dsi0eMfQvYsNzmguDjEWEwD9pqyda3xp3wwD6Fx0tfV18AwzI1V8tueKS3ZPlcfYWkw0npLniSLX8EoeOAJ0k+otBxwpOcf8HSeXVA4IQnqfgsRlR2xyNNIOvDQ37PwWb0niMAZzxSAwOOf/T6MJcDrAbVk10b/3ikWwzYnyq5y9wlYCehEsuAxyceqb6CDEDf/s7C0SHrituvd8WjjZ+hApCCp20Z7JMt56DsGQ8LQDAOhrdVSep3CQgclfKbUP94pGsIB8vjt7K+2iuEAdE1b7wTDI/WwcdtQCX8eFysQ+I2INWuQw+IR6o+xRqBFLypfy5WuY/XgGjXLWP5xaOViLFdo5XHyvB0sVY2PgMiLqVgMDxS/XtMHlbCN9bVRjQeQCq99xR1fOORpN0qhiK6gDfXvMVqcXiYStfcmXIkeFiORxEDKuBft3aL9Wc0WkAqzbo0ESHxSNI0HyGgAm6+OC3WihKQSlUvpU44PMyCnqKJQfkSHjjC0QEtIopBKu36hhMIjyS9DHDoNK9gvLR1K6P6Y0pCmxChi5b7UlYFwsPKoHccJs8zw9lO6u7L7FWZd0OZkErJyEe2MiogHqbhBuNCEBtibPDdzt9i/TEJSEilctFnPDYoOB5JKjcemA35CtR55lN4OXT/v61qaYT8eZlKGJu269TCQWHwMJWHd1uviPIFhmZ149NujOqP1tQrIoaGdsedMGyk0Hg0XTeWK/bDSw6epmhkcPN96Dne2KnSGc2IzBg5QFIJs5ruuB0w3hgVAR5N9d3PuwHWVSoVCspehVJp/2/o4b1xW45mKaZ+e1TMypRZEmGcPsT+Rqksk9l4/iOk1RwVEZ696tWXxs+bu7fNoNlcNZuDzfLuZtrYVaMDY1TtR2c+Gr8WF7P1ej1bFF/Ho3m71Y8IzF7/BwKohBqaGch4AAAAAElFTkSuQmCC",
                    },
                    {
                      name: "American Express",
                      logo: "https://cdn.worldvectorlogo.com/logos/american-express-1.svg",
                    },
                    {
                      name: "Google Pay",
                      logo: "https://cdn.worldvectorlogo.com/logos/google-pay-2.svg",
                    },
                  ].map((payment, idx) => (
                    <div
                      key={idx}
                      className="payment-icon p-2"
                      style={{
                        background: "#fff",
                        transition: "all 0.3s ease",
                        transform: "scale(1)",
                        width: "70px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        border: "1px solid #eee",
                        borderRadius: "8px",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 5px 15px rgba(0,0,0,0.1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(0,0,0,0.05)";
                      }}
                    >
                      <img
                        src={payment.logo}
                        alt={payment.name}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "24px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="py-4"
          style={{
            borderTop: "1px solid rgba(0, 102, 255, 0.1)",
            background: "rgba(0, 102, 255, 0.02)",
          }}
        >
          <Link
            href="/privacy-policy"
            className="text-secondary text-decoration-none small me-3 hover-link"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-of-service"
            className="text-secondary text-decoration-none small hover-link"
          >
            Terms of Service
          </Link>

          <style jsx>{`
            .hover-link {
              transition: all 0.3s ease;
            }
            .hover-link:hover {
              color: var(--primary-color) !important;
            }
          `}</style>
        </div>
      </footer>
    </>
  );
}
