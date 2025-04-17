"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const [isMounted, setIsMounted] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    setIsMounted(true);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const images = [
    "/images/album/ac-service1730471015.jpg",
    "/images/album/service2.jpg",
    "/images/album/service3.jpg",
  ];

  const testimonials = [
    {
      name: "Thennarasu Sathya",
      text: "I recently had my washing machine serviced, and I am extremely satisfied with the experience. The technician was punctual, professional, and very knowledgeable.",
      image: "/images/testimonials/john.jpg",
    },
    {
      name: "Vis Wha",
      text: "No hidden costs! The pricing was reasonable, and they provided a clear breakdown of the charges. Good job easyfix",
      image: "/images/testimonials/jane.jpg",
    },
  ];

  const milestones = [
    { end: 3000, suffix: "+", label: "Successful Services", icon: "trophy" },
    { end: 15, suffix: "+", label: "Years in Business", icon: "check" },
    { end: 99, suffix: "%", label: "Happy Clients", icon: "star" },
  ];

  return (
    <section className="aboutus my-8" id="about">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h6 className="section-title text-primary text-uppercase">About Us</h6>
          <h2 className="fw-bold display-5">
            Service That Makes a <span className="gradient-text">Difference</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="row g-4 align-items-center">
          {/* Image Carousel */}
          <div className="col-md-5" data-aos="fade-right">
            {isMounted && (
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                navigation
                pagination={{ clickable: true }}
                className="aboutus-carousel"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={src}
                      className="aboutus-image"
                      width={400}
                      height={300}
                      style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
                      alt={`Service ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          {/* Text Content */}
          <div className="col-md-7" data-aos="fade-left">
            <div className="p-4 p-md-5 custom-bg custom-border-radius aboutus-content">
              <p className="lead">
                Looking for a trusted home appliance service center in Karaikudi? With over{" "}
                <strong>15 years</strong> of experience, we offer top-notch repair and maintenance
                services at affordable rates. Specializing in Air Conditioners, Washing Machines,
                Refrigerators, Air Coolers, and more, we handle top brands like LG, Samsung, Whirlpool,
                Panasonic, and Bosch.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i> Same-day service for
                  urgent repairs
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i> Certified technicians
                  with extensive training
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i> Genuine spare parts
                  with warranty
                </li>
              </ul>
              <a href="#contact" className="btn btn-primary btn-with-icon mt-4 ">
                Book a Service
              </a>
            </div>
          </div>
        </div>

        {/* Milestones Section */}
        <div
          ref={ref}
          className="milestones-section custom-border-radius p-5 mt-5"
          data-aos="fade-up"
        >
          <div className="milestones-content">
            <div className="row text-center">
              {milestones.map((milestone, index) => (
                <div
                  className="col-md-4 mb-4"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <div className="counter-card">
                    <div className="counter-icon">
                      {milestone.icon === "trophy" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.03 1.492.567 2.695 1.594 3.69.408-.344.741-.77.941-1.229a33.336 33.336 0 0 0-.056-1.469c-.03-1.492-.567-2.695-1.594-3.69-.2.46-.533.885-.941 1.229z" />
                        </svg>
                      )}
                      {milestone.icon === "star" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      )}
                      {milestone.icon === "check" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                        </svg>
                      )}
                    </div>
                    <h2 className="display-4 text-primary">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={milestone.end}
                          duration={2.5}
                          suffix={milestone.suffix}
                          useEasing={true}
                          redraw={true}
                        />
                      ) : (
                        "0"
                      )}
                    </h2>
                    <p>{milestone.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>*/

        {/* Testimonials Section */}
        <div className="mt-5" data-aos="fade-up">
          <h3 className="text-center fw-bold mb-4">What Our Clients Say</h3>
          {isMounted && (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              className="testimonials-carousel"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card p-4 text-center custom-bg custom-border-radius">
                    <Image
                      src={testimonial.image}
                      width={60}
                      height={60}
                      className="rounded-circle mb-3"
                      alt={testimonial.name}
                    />
                    <p className="fst-italic">{testimonial.text}</p>
                    <h6 className="fw-bold">{testimonial.name}</h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}