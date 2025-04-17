"use client";
/* eslint-disable react/no-unescaped-entities */

export default function Faq() {
  return (
    <>
      <section className="faq my-8" data-aos="fade-up">
        <div className="container">
          <div className="text-center mb-5">
            <div className="w-100 d-flex align-items-center justify-content-center">
              <h6 className="text-primary text-uppercase section-title">FAQ</h6>
            </div>
            <h2 className="fw-bold display-5 section-subtitle">
              Find the <span className="gradient-text">answers</span>
              <br /> you need
            </h2>
          </div>

          <div
            className="accordion accordion-flush w-100 w-md-50 mx-auto"
            id="accordionFlushExample"
          >
            {/* Question 1 */}
            <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How often should I service my home appliances?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div 
                
                className="accordion-body">
                  It depends on the appliance. Air conditioners should be serviced every 6-12 months, 
                  refrigerators every 12 months, washing machines every 6 months, 
                  and ovens at least once a year to ensure optimal performance and longevity.
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="accordion-item" data-aos="fade-up" data-aos-delay="500">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  What are the signs that my AC needs repair?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  If your AC is blowing warm air, making unusual noises, leaking water, 
                  or your electricity bill is suddenly higher, it might need servicing. 
                  A clogged filter, refrigerant leak, or faulty compressor could be the issue.
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="accordion-item" data-aos="fade-up" data-aos-delay="600">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Why is my washing machine not draining properly?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  A washing machine may not drain due to a clogged drain hose, 
                  a faulty drain pump, or an overloaded drum. Cleaning the hose 
                  and checking the pump can help. If the issue persists, professional 
                  service may be needed.
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="accordion-item" data-aos="fade-up" data-aos-delay="700">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  What should I do if my refrigerator is not cooling properly?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  First, check if the thermostat is set correctly. If the fridge is still not cooling, 
                  the condenser coils might be dirty, the door seal could be loose, or the compressor 
                  may have issues. Cleaning the coils and checking the seal can help. If the problem 
                  continues, a technician can diagnose and fix it.
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="accordion-item" data-aos="fade-up" data-aos-delay="800">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  How can I extend the life of my home appliances?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Regular maintenance is key. Clean filters, coils, and vents frequently. 
                  Avoid overloading washing machines and dishwashers. Keep appliances dry 
                  and use voltage stabilizers if needed. Professional servicing once a year 
                  can also help extend their lifespan.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}