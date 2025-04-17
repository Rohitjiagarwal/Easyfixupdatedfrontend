"use client";
import Image from "next/image";


export default function Testimonials() {
  const reviews = [
    {
      name: "Suresh Ragavan",
      profession: "Washing Machine Repair",
      text: "Exceptional service! The team was professional, prompt, and exceeded my expectations. Highly recommended!",
      image: "/images/album/user.jpg",
    },
    {
      name: "Karthik",
      profession: "Fridge Repair",
      text: "From start to finish, the experience was seamless. The service quality was top-notch. Will definitely use again!",
      image: "/images/album/user.jpg",
    },
    {
      name: "Dhinesh Kumar",
      profession: "Air Conditioner Repair Services",
      text: "I appreciate the attention to detail and the excellent customer support. Everything was handled professionally.",
      image: "/images/album/user.jpg",
    },
    {
      name: "Vignesh Mani",
      profession: "Dishwasher Repair",
      text: "Excellent work! The team went above and beyond to ensure everything was perfect. Worth every penny.",
      image: "/images/album/user.jpg",
    },
    {
      name: "Rajesh",
      profession: "Oven Repair",
      text: "They made the entire process stress-free. I'm really impressed with the professionalism and efficiency.",
      image: "/images/album/user.jpg",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="header">
          <h6 className="text-primary text-uppercase">Testimonials</h6>
          <h2 className="fw-bold display-5">
            Our clients speak highly of us, <br /> why not{" "}
            <span className="gradient-text">try</span> it yourself?
          </h2>
        </div>

        <div className="testimonials-container">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-content">{review.text}</p>
              <div className="reviewer-info">
                <Image src={review.image} width={50} height={50} alt={review.name} />
                <div className="reviewer-details">
                  <h5>{review.name}</h5>
                  <p>{review.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}