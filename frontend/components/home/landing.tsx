"use client";
import React from "react";

export default function LandingPage() {
  return (
    <section className="landing-page" data-aos="zoom-out-up">
      <div className="container">
        <div className="landing-page-content row">
          <div className="col-md-6 text-content">
            <h1 className="display-4 fw-bold">
              Schedule a Service <br />
              Appointment and Enjoy <br />
              Comfort in Your Home Again!
            </h1>
            <p className="desc mt-4">
              Book your service today and let our experts bring comfort back to your home with ease.
            </p>
          </div>

          <div className="col-md-6">
            <div className="booking-form p-4 bg-white rounded-4">
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
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-custom-light"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label text-custom-light"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label text-custom-light"
                  >
                    Service
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue=""
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
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}