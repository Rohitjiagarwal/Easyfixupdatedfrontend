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
import CountUp from "react-countup"; // Import react-countup for number animation
import { useInView } from "react-intersection-observer"; // Import react-intersection-observer to detect visibility

export default function AboutUs() {
  const [isMounted, setIsMounted] = useState(false);

  // Use react-intersection-observer to detect when the milestones section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  useEffect(() => {
    setIsMounted(true);
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Sample images for carousel
  const images = [
    "/images/album/ac-service1730471015.jpg",
    "/images/album/service2.jpg",
    "/images/album/service3.jpg",
  ];

  // Sample testimonials
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

  // Define milestone data with end values
  const milestones = [
    { end: 3000, suffix: "+", label: "Successful Services" },
    { end: 15, suffix: "+", label: "Years in Business" },
    { end: 99, suffix: "%", label: "Happy Clients" },
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
              <a href="#contact" className="btn btn-primary btn-with-icon mt-4">
                <span>
                  <i className="bi bi-telephone-fill"></i>
                </span>{" "}
                Book a Service
              </a>
            </div>
          </div>
        </div>

        {/* Milestones Section with Dynamic Numbers */}
        <div
          ref={ref} // Attach the ref to the milestones section
          className="custom-bg custom-border-radius p-5 milestones-temp mt-5"
          data-aos="fade-up"
        >
          <div className="milestones-content">
            <div className="row text-center">
              {milestones.map((milestone, index) => (
                <div className="col-md-4" key={index}>
                  <div className="counter">
                    <h2 className="display-4 text-primary">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={milestone.end}
                          duration={2.5} // Animation duration in seconds
                          suffix={milestone.suffix}
                          useEasing={true}
                          redraw={true}
                        />
                      ) : (
                        "0" // Show 0 until the section is in view
                      )}
                    </h2>
                    <p>{milestone.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
                    <p className="fst-italic">"{testimonial.text}"</p>
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