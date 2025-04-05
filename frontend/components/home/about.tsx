"use client"

import Image from "next/image";

export default function AboutUs(){
    return(
        <>
        <section className="aboutus my-8" id="about">
        <div className="container">
            <div className="row g-4">
                <div className="col-md-5" data-aos="fade-right">
                    <Image src="/images/album/ac-service1730471015.jpg" className="aboutus-Image" width={400} height={300} 
                    style={{width:"100%", height:"100%"}} alt=""/>
                </div>
                <div className="col-md-7" data-aos="fade-left">
                    <div className="p-3 p-md-5 custom-bg custom-border-radius">
                        <h6 className="text-primary text-uppercase">About us</h6>
                        <h2 className="fw-bold display-5">
                            Service That Makes a <br /><span className="gradient-text">Difference</span>
                        </h2>
                        <p className="mt-5">
                            You are looking for a home appliance service center in Karaikudi at the most affordable
                            rates.
                            We have 15+ Years of experience in services and best in market. We also in sales and service
                            of
                            Air Conditioners, Washing Machines, Refrigerators, Air Coolers and Other Electronics on top
                            brand in the market of both domestic and imported such as LG, Samsung, Warlpool, Bajaj,
                            Panasonic, Voltas, Hitachi, Onida, Hair, IFB, Bosch, Electrolux & More.
                        </p>



                    </div>

                    <div className="custom-bg custom-border-radius p-5 milestones-temp">
                        <div className="milestones-content">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="counter">
                                        <h2 className="display-4">3k+</h2>
                                        <p>successfull services</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="counter">
                                        <h2 className="display-4">5+</h2>
                                        <p>years in business</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="counter">
                                        <h2 className="display-4">99%</h2>
                                        <p>happy clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}