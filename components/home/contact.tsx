"use client";

export default function ContactUs() {
  return (
    <>
      <section id="contact" className="contact text-white">
        <div className="container">
          <div className="text-center mb-5">
            <div className="w-100 d-flex align-items-center justify-content-center">
              <h6 className="text-primary text-uppercase section-title">
                Contact Us
              </h6>
            </div>
            <h2 className="fw-bold display-5 section-subtitle">
              Reach out for a <span className="gradient-text">service</span>
            </h2>
          </div>

          <div className="row g-4">
            <div
              className="col-md-8"
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
            >
              <iframe
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Easyfix Expert&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="custom-border-radius"
              ></iframe>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="custom-bg-dark custom-border-radius p-5">
                <h5>contact info</h5>
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <h6>Where to Find Us</h6>
                    <address>
                      No:25, 1st Subramaniyapuram street, <br /> State Bank
                      Road, Karaikudi 630002
                    </address>
                  </div>
                  <div className="col-md-12 mb-4">
                    <h6>Email Us At</h6>
                    <p>
                      <a className="break" href="mailto:info@easyfixexpert.com">
                        info@easyfixexpert.com
                      </a>
                    </p>
                  </div>
                  <div className="col-md-12 mb-4">
                    <h6>Contact No</h6>
                    <p>
                      <a className="break" href="tel:+91 79049 63384">
                        +91 79049 63384 <br />
                        +91 94876 63746
                      </a>
                    </p>
                  </div>
                  <div className="col-md-12 mb-4">
                    <p className="d-flex align-items-center">
                      <a href="http://www.w3.org/2000/svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                          />
                        </svg>
                      </a>
                      <a href="http://www.w3.org/2000/svg" className="ms-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                          />
                        </svg>
                      </a>
                      <a href="http://www.w3.org/2000/svg" className="ms-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13zm15-3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M14 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0m2 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
