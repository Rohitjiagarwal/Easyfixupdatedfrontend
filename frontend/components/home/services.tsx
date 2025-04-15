"use client";

import { useEffect } from "react";
import AOS from "aos"; // For animations
import "aos/dist/aos.css"; // AOS styles
import { motion } from "framer-motion"; // For interactive animations

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS for animations
  }, []);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", transition: { duration: 0.3 } },
  };

  // Services data
  const services = [
    {
      title: "Air Conditioner",
      description: "Expert AC installation, regular maintenance, and efficient repair services for all brands and models.",
      tags: ["#Installation", "#RegularMaintenance"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <g fill="none" fillRule="evenodd">
            <path fill="white" d="M10 16a1 1 0 0 1 1 1v1.172a3 3 0 0 1-.879 2.12l-.414.415a1 1 0 0 1-1.414-1.414l.414-.414A1 1 0 0 0 9 18.172V17a1 1 0 0 1 1-1m4 0a1 1 0 0 1 .993.883L15 17v1.172a1 1 0 0 0 .206.608l.087.099l.414.414a1 1 0 0 1-1.32 1.497l-.094-.083l-.414-.414a3 3 0 0 1-.872-1.923L13 18.172V17a1 1 0 0 1 1-1m-8 0a1 1 0 0 1 .993.883L7 17v.613a2 2 0 0 1-1.218 1.84l-.150.057l-1.316.439a1 1 0 0 1-.74-1.854l.108-.044L5 17.613V17a1 1 0 0 1 1-1m12 0a1 1 0 0 1 .993.883L19 17v.613l1.316.438a1 1 0 0 1-.52 1.928l-.112-.030l-1.316-.44a2 2 0 0 1-1.362-1.736l-.006-.16V17a1 1 0 0 1 1-1m0-13a3 3 0 0 1 2.995 2.824L21 6v6a3 3 0 0 1-2.824 2.995L18 15H6a3 3 0 0 1-2.995-2.824L3 12V6a3 3 0 0 1 2.824-2.995L6 3zm0 8H6a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-1-1m-1-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
          </g>
        </svg>
      ),
    },
    {
      title: "Washing Machine",
      description: "Seamless washing machine installation, thorough periodic servicing, and prompt repairs to keep your laundry hassle-free.",
      tags: ["#Installation", "#PeriodicService", "#Repairs"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
          <path fill="white" d="M73 41v78h110V41zm128 0v78h238V41zm199 23a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16m-176 7h48v18h-48zm80 0h48v18h-48zM73 137v350h366V137zm183 30c82.7 0 150 67.3 150 150s-67.3 150-150 150s-150-67.3-150-150s67.3-150 150-150m0 18c-73 0-132 59-132 132s59 132 132 132c48.5 0 90.8-26 113.7-64.9L339.6 360a94.02 94.02 0 0 1-83.6 51a94.02 94.02 0 0 1-94-94a94.02 94.02 0 0 1 94-94a94.02 94.02 0 0 1 85.7 55.3l30.4-24.3c-22.3-41.1-65.9-69-116.1-69m-6.9 62c-50.1 1.1-76.9 51-62 93.9c-.7-37.8 30.1-78 62-93.9m130.6 23.9l-32 25.6A94 94 0 0 1 350 317a94 94 0 0 1-3.5 25.5l31.4 25.2C384.4 352.1 388 335 388 317c0-16.2-2.9-31.8-8.3-46.1" />
        </svg>
      ),
    },
    {
      title: "Fridge",
      description: "Reliable fridge servicing, cooling issue fixes, and professional installation for all types and brands.",
      tags: ["#CoolingFix", "#Maintenance", "#SetupService"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="white" d="M7 2h10a2 2 0 0 1 2 2v5H5V4a2 2 0 0 1 2-2m12 17a2 2 0 0 1-2 2v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2v-9h14zM8 5v2h2V5zm0 7v3h2v-3z" />
        </svg>
      ),
    },
    {
      title: "Dish Washer",
      description: "Comprehensive dishwasher installations, periodic servicing, and swift repairs for a spotless performance every time.",
      tags: ["#Setup", "#RoutineService", "#QuickRepairs"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="white" d="M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616v14.769q0 .69-.462 1.153T17.384 21zM8 6.77q.31 0 .54-.23T8.77 6t-.23-.54T8 5.23t-.54.23t-.23.54t.23.54t.54.23m3 0q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m1 10.73q1.364 0 2.332-.93t.968-2.27q0-.629-.212-1.22q-.211-.591-.653-1.034L12 9.612l-2.354 2.353q-.473.473-.722 1.077T8.7 14.3q.05 1.339 1.006 2.27T12 17.5m0-.92q-.961 0-1.63-.659q-.67-.66-.67-1.621q0-.452.147-.857t.48-.737L12 11.033l1.744 1.744q.295.294.425.702q.131.408.131.821q0 .962-.67 1.621q-.668.66-1.63.66" />
        </svg>
      ),
    },
    {
      title: "Oven",
      description: "Precise oven repairs, maintenance, and safe installations to keep your cooking uninterrupted.",
      tags: ["#Installation", "#RegularCheckups", "#RepairService"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
          <defs>
            <mask id="ipSOven0">
              <g fill="none">
                <rect width="40" height="28" x="4" y="8" fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" rx="2" />
                <rect width="16" height="12" x="12" y="16" fill="#000" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" rx="1" />
                <circle cx="37" cy="15" r="2" fill="#000" />
                <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M36 22h2m-2 7h2" />
                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M12 36v6m24-6v6" />
              </g>
            </mask>
          </defs>
          <path fill="white" d="M0 0h48v48H0z" mask="url(#ipSOven0)" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="services py-5 position-relative overflow-hidden">
        {/* Subtle Background Gradient */}
        <div className="background-gradient position-absolute top-0 start-0 w-100 h-100"></div>

        <div className="container">
          {/* Header Section */}
          <div className="mb-5 text-center" data-aos="fade-up">
            <h6 className="text-primary section-title text-uppercase mb-2">What We Offer</h6>
            <h2 className="display-5 fw-bold section-subtitle mb-3">
              Explore our{" "}
              <span className="explore-icon d-inline-block position-relative">
                <motion.span
                  className="icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                    <path fill="white" d="M764.416 254.72a351.7 351.7 0 0 1 86.336 149.184H960v192.064H850.752a351.7 351.7 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96l54.72-94.72a351.7 351.7 0 0 1-86.336-149.312H64v-192h109.248a351.7 351.7 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0a192 192 0 0 0 384 0" />
                  </svg>
                </motion.span>
              </span>{" "}
              Expert <span className="gradient-text">Services</span>
            </h2>
            <p className="text-custom-light mx-auto" style={{ maxWidth: "600px" }}>
              From installation to regular maintenance and repairs, we provide expert service for all your essential home appliances, including air conditioners, washing machines, refrigerators, ovens, and dishwashers. With skilled technicians and a commitment to quality, we ensure your appliances run smoothly, efficiently, and for longer.
            </p>
          </div>

          {/* Services Grid */}
          <div className="row g-4" data-aos="fade-up">
            {services.map((service, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <motion.div
                  className="service-card border rounded-3 p-4 bg-white"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <div className="icon-box d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3">
                    {service.icon}
                  </div>
                  <div className="services-content text-center">
                    <h5 className="service-title fw-semibold mb-2">{service.title}</h5>
                    <p className="text-custom-light mb-3">{service.description}</p>
                    <div className="chips-box d-flex flex-wrap justify-content-center gap-2 mb-3">
                      {service.tags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          className="chips px-3 py-1 rounded-pill"
                          whileHover={{ backgroundColor: "#2575fc", color: "#fff" }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
            {/* Highlight Card */}
            <div className="col-md-4 col-sm-6">
              <motion.div
                className="service-card border rounded-3 p-4 bg-primary text-white d-flex align-items-center justify-content-center h-100"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <h5 className="text-center fw-semibold">Expert Care, Every Repair</h5>
              </motion.div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center mt-5" data-aos="fade-up">
            <motion.button
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "#contact"}
            >
              Book a Service Now
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}