"use client";
import React, { useState, useEffect } from "react";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });
  const [tagline, setTagline] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const taglines = [
    "Fast. Reliable. Professional.",
    "Comfort at Your Doorstep.",
    "Expert Service, Anytime.",
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentTagline = taglines[taglineIndex];

    const type = () => {
      if (!isDeleting && charIndex < currentTagline.length) {
        setTagline(currentTagline.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTagline(currentTagline.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentTagline.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTaglineIndex((taglineIndex + 1) % taglines.length);
      }
    };

    const timer = setTimeout(type, typeSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, taglineIndex]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="landing-page" data-aos="zoom-out-up">
      <div className="container">
        <div className="landing-page-content row">
          <div
            className="col-md-6 text-content"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div
              className="tagline-banner"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <span className="typing-text">{tagline}</span>
            </div>
            <h1 className="display-4 fw-bold">
              Schedule a Service <br />
              Appointment and Enjoy <br />
              Comfort in Your Home Again!
            </h1>
            <p className="desc mt-4">
              Book your service today and let our experts bring comfort back to
              your home with ease.
            </p>
          </div>

          <div
            className="col-md-6 booking-form-wrapper"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="booking-form">
              <h6 className="mb-4 text-custom fw-semibold">
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
              <form action="">
                <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-custom-light"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${formData.name ? "filled" : ""}`}
                    id="exampleInputEmail1"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3" data-aos="fade-up" data-aos-delay="500">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label text-custom-light"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className={`form-control ${formData.phone ? "filled" : ""}`}
                    id="exampleInputPassword1"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-3" data-aos="fade-up" data-aos-delay="600">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label text-custom-light"
                  >
                    Service
                  </label>
                  <select
                    className={`form-select ${
                      formData.service ? "filled" : ""
                    }`}
                    aria-label="Default select example"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="1">Air Conditioner Service</option>
                    <option value="2">Washing Machine Service</option>
                    <option value="3">Dishwasher Service</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill mt-3 w-100 p-2"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  Book Now
                </button>
              </form>
              <div
                className="service-icons"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21 8V7l-3-2-3 2v1h-1v7h8V8h-1zM8 6H3v12h5v2l3-3-3-3v2H5V8h3V6z" />
                  </svg>
                  <p>AC Service</p>
                </div>
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14H5V6h14v10z" />
                  </svg>
                  <p>Washing</p>
                </div>
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 14H6V6h12v10z" />
                  </svg>
                  <p>Dishwasher</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="decorative-shape shape-1"></div>
          <div className="decorative-shape shape-2"></div>
          <div className="decorative-shape shape-3"></div>
        </div>
      </div>
      <div className="scroll-down" data-aos="fade-up" data-aos-delay="900">
        <span></span>
        <p>Scroll Down</p>
      </div>
      <div className="wave-decoration"></div>
    </section>
  );
}
