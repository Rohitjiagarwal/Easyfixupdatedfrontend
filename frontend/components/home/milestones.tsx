"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Milestones() {
  const [isMounted, setIsMounted] = useState(false);

  // Use react-intersection-observer to trigger animations when section is in view
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    setIsMounted(true);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const milestones = [
    {
      end: 3000,
      suffix: "+",
      label: "Successful Services",
      icon: "trophy",
      description: "Over 3000 services completed with precision and care.",
    },
    {
      end: 5,
      suffix: "+",
      label: "Years in Business",
      icon: "check",
      description: "Serving Karaikudi for over 5 years with trust.",
    },
    {
      end: 99,
      suffix: "%",
      label: "Happy Clients",
      icon: "star",
      description: "99% of our clients leave with a smile.",
    },
    {
      end: 99,
      suffix: "%",
      label: "Client Satisfaction",
      icon: "heart",
      description: "Our commitment to satisfaction shines through.",
    },
  ];

  return (
    <section className="milestones-section my-8" data-aos="fade-up" ref={ref}>
      <div className="container">
        <div className="milestones-content">
          <div className="row text-center">
            {milestones.map((milestone, index) => (
              <div
                className="col-md-3 col-6 mb-4"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <div className="counter-card" title={milestone.description}>
                  <div className="counter-icon">
                    {milestone.icon === "trophy" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
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
                    {milestone.icon === "heart" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z" />
                      </svg>
                    )}
                  </div>
                  <div className="counter-ring">
                    <svg width="120" height="120" className="progress-ring">
                      <circle
                        className="progress-ring-circle"
                        stroke="#fff"
                        strokeOpacity="0.2"
                        strokeWidth="8"
                        cx="60"
                        cy="60"
                        r="56"
                        fill="transparent"
                      />
                      <circle
                        className="progress-ring-circle progress-ring-animated"
                        stroke="var(--bs-primary-light)"
                        strokeWidth="8"
                        cx="60"
                        cy="60"
                        r="56"
                        fill="transparent"
                        style={{
                          strokeDasharray: inView ? `${351.86 * (milestone.end / 100)} 351.86` : "0 351.86",
                          transition: "stroke-dasharray 2.5s ease",
                        }}
                      />
                    </svg>
                    <h2 className="display-4">
                      {inView && isMounted ? (
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
                  </div>
                  <p>{milestone.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="#about" className="btn btn-primary btn-with-icon">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}