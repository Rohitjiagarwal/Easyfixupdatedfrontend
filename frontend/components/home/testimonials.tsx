"use client"
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */

export default function Testimonials(){
    return(
        <>
        <section className="testimonials my-8">
        <div className="container">

            <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
                <div className="mb-3" data-aos="fade-right">
                    <h6 className="text-primary text-uppercase section-title">testimonials</h6>
                    <h2 className="fw-bold display-5 section-subtitle">
                        Our client speaks highly of us, <br />why not <span className="gradient-text">try</span> it
                        yourself?
                    </h2>
                </div>

                <div className="swiper testimonialsSwiper" data-aos="fade-left">
                    {/* <!-- <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div> --> */}
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{ maxWidth: "540px" }}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Suresh Ragavan</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{maxWidth: "540px"}}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Karthik</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{maxWidth: "540px"}}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Dhinesh Kumar</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{maxWidth: "540px"}}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Vignesh Mani</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{maxWidth: "540px"}}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Rajesh</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{maxWidth: "540px"}}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Dilip Kumar</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{maxWidth: "540px"}}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Parthiban</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}