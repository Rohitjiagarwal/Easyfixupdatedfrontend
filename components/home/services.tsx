"use client"

export default function Services() {
    return(
        <>
        <section className="services">
        <div className="container">
            <div className="mb-5" data-aos="fade-right">
                {/* <!-- <div className="w-100 d-flex align-items-center justify-content-center"> --> */}
                <h6 className="text-primary section-title text-uppercase">What We Offer</h6>
                {/* <!-- </div> --> */}
                <h2 className="display-5 fw-bold section-subtitle">
                    {/* <!-- Complete Care for Every <br /><span className="gradient-text">Appliance</span> in Your Home --> */}
                    Explore our <span className="explore-icon">
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                                <path fill="white"
                                    d="M764.416 254.72a351.7 351.7 0 0 1 86.336 149.184H960v192.064H850.752a351.7 351.7 0 0 1-86.336 149.312l54.72 94.72l-166.272 96l-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96l54.72-94.72a351.7 351.7 0 0 1-86.336-149.312H64v-192h109.248a351.7 351.7 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0a192 192 0 0 0 384 0" />
                            </svg>
                        </span>
                    </span> Expert <span className="gradient-text">Services</span>
                </h2>
                <p className="m-0 text-custom-light w-100 w-md-50">
                    From installation to regular maintenance and repairs, we provide expert service for all
                    your essential home appliances, including air conditioners, washing machines, refrigerators,
                    ovens, and dishwashers. With skilled technicians and a commitment to quality, we ensure your
                    appliances run smoothly, efficiently, and for longer.
                </p>
            </div>


            <div className="d-flex align-items-center " data-aos="fade-up">
                {/* <!-- <p className="me-5 align-self-start fw-semibold">categories</p> -->
                <!-- Swiper --> */}
                {/* <!-- <div className="swiper servicesSwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <g fill="none" fillRule="evenodd">
                                            <path
                                                d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                            <path fill="white"
                                                d="M10 16a1 1 0 0 1 1 1v1.172a3 3 0 0 1-.879 2.12l-.414.415a1 1 0 0 1-1.414-1.414l.414-.414A1 1 0 0 0 9 18.172V17a1 1 0 0 1 1-1m4 0a1 1 0 0 1 .993.883L15 17v1.172a1 1 0 0 0 .206.608l.087.099l.414.414a1 1 0 0 1-1.32 1.497l-.094-.083l-.414-.414a3 3 0 0 1-.872-1.923L13 18.172V17a1 1 0 0 1 1-1m-8 0a1 1 0 0 1 .993.883L7 17v.613a2 2 0 0 1-1.218 1.84l-.15.057l-1.316.439a1 1 0 0 1-.74-1.854l.108-.044L5 17.613V17a1 1 0 0 1 1-1m12 0a1 1 0 0 1 .993.883L19 17v.613l1.316.438a1 1 0 0 1-.52 1.928l-.112-.03l-1.316-.44a2 2 0 0 1-1.362-1.736l-.006-.16V17a1 1 0 0 1 1-1m0-13a3 3 0 0 1 2.995 2.824L21 6v6a3 3 0 0 1-2.824 2.995L18 15H6a3 3 0 0 1-2.995-2.824L3 12V6a3 3 0 0 1 2.824-2.995L6 3zm0 8H6a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-1-1m-1-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Air Conditioner</h5>
                                        <p>Expert AC installation, regular maintenance, and efficient repair services
                                            for
                                            all
                                            brands and models.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#Installation</span>
                                        <span className="chips">#regular maintenance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                        viewBox="0 0 512 512">
                                        <path fill="white"
                                            d="M73 41v78h110V41zm128 0v78h238V41zm199 23a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16m-176 7h48v18h-48zm80 0h48v18h-48zM73 137v350h366V137zm183 30c82.7 0 150 67.3 150 150s-67.3 150-150 150s-150-67.3-150-150s67.3-150 150-150m0 18c-73 0-132 59-132 132s59 132 132 132c48.5 0 90.8-26 113.7-64.9L339.6 360a94.02 94.02 0 0 1-83.6 51a94.02 94.02 0 0 1-94-94a94.02 94.02 0 0 1 94-94a94.02 94.02 0 0 1 85.7 55.3l30.4-24.3c-22.3-41.1-65.9-69-116.1-69m-6.9 62c-50.1 1.1-76.9 51-62 93.9c-.7-37.8 30.1-78 62-93.9m130.6 23.9l-32 25.6A94 94 0 0 1 350 317a94 94 0 0 1-3.5 25.5l31.4 25.2C384.4 352.1 388 335 388 317c0-16.2-2.9-31.8-8.3-46.1" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Washing Machine</h5>
                                        <p>Seamless washing machine installation, thorough periodic servicing, and
                                            prompt repairs to keep your laundry hassle-free.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#installation</span>
                                        <span className="chips">#PeriodicService</span>
                                        <span className="chips">#Repairs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M7 2h10a2 2 0 0 1 2 2v5H5V4a2 2 0 0 1 2-2m12 17a2 2 0 0 1-2 2v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2v-9h14zM8 5v2h2V5zm0 7v3h2v-3z" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Fridge</h5>
                                        <p>Reliable fridge servicing, cooling issue fixes, and professional installation
                                            for all types and brands.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#CoolingFix</span>
                                        <span className="chips">#Maintenance</span>
                                        <span className="chips">#SetupService</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616v14.769q0 .69-.462 1.153T17.384 21zM8 6.77q.31 0 .54-.23T8.77 6t-.23-.54T8 5.23t-.54.23t-.23.54t.23.54t.54.23m3 0q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m1 10.73q1.364 0 2.332-.93t.968-2.27q0-.629-.212-1.22q-.211-.591-.653-1.034L12 9.612l-2.354 2.353q-.473.473-.722 1.077T8.7 14.3q.05 1.339 1.006 2.27T12 17.5m0-.92q-.961 0-1.63-.659q-.67-.66-.67-1.621q0-.452.147-.857t.48-.737L12 11.033l1.744 1.744q.295.294.425.702q.131.408.131.821q0 .962-.67 1.621q-.668.66-1.63.66" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Dish Washer</h5>
                                        <p>Comprehensive dishwasher installations, periodic servicing, and swift repairs
                                            for a spotless performance every time.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#Setup</span>
                                        <span className="chips">#RoutineService</span>
                                        <span className="chips">#QuickRepairs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                                        <defs>
                                            <mask id="ipSOven0">
                                                <g fill="none">
                                                    <rect width="40" height="28" x="4" y="8" fill="#fff" stroke="#fff"
                                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                                                        rx="2" />
                                                    <rect width="16" height="12" x="12" y="16" fill="#000" stroke="#000"
                                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                                                        rx="1" />
                                                    <circle cx="37" cy="15" r="2" fill="#000" />
                                                    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="4" d="M36 22h2m-2 7h2" />
                                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="4" d="M12 36v6m24-6v6" />
                                                </g>
                                            </mask>
                                        </defs>
                                        <path fill="white" d="M0 0h48v48H0z" mask="url(#ipSOven0)" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Oven</h5>
                                        <p>Precise oven repairs, maintenance, and safe installations to keep your
                                            cooking uninterrupted.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#Installation</span>
                                        <span className="chips">#RegularCheckups</span>
                                        <span className="chips">#RepairService</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> --> */}


                <div className="container servicesSwiper">
                    <div className="row g-4">
                        <div className="col-md-4 ">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <g fill="none" fillRule="evenodd">
                                            <path
                                                d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                            <path fill="white"
                                                d="M10 16a1 1 0 0 1 1 1v1.172a3 3 0 0 1-.879 2.12l-.414.415a1 1 0 0 1-1.414-1.414l.414-.414A1 1 0 0 0 9 18.172V17a1 1 0 0 1 1-1m4 0a1 1 0 0 1 .993.883L15 17v1.172a1 1 0 0 0 .206.608l.087.099l.414.414a1 1 0 0 1-1.32 1.497l-.094-.083l-.414-.414a3 3 0 0 1-.872-1.923L13 18.172V17a1 1 0 0 1 1-1m-8 0a1 1 0 0 1 .993.883L7 17v.613a2 2 0 0 1-1.218 1.84l-.15.057l-1.316.439a1 1 0 0 1-.74-1.854l.108-.044L5 17.613V17a1 1 0 0 1 1-1m12 0a1 1 0 0 1 .993.883L19 17v.613l1.316.438a1 1 0 0 1-.52 1.928l-.112-.03l-1.316-.44a2 2 0 0 1-1.362-1.736l-.006-.16V17a1 1 0 0 1 1-1m0-13a3 3 0 0 1 2.995 2.824L21 6v6a3 3 0 0 1-2.824 2.995L18 15H6a3 3 0 0 1-2.995-2.824L3 12V6a3 3 0 0 1 2.824-2.995L6 3zm0 8H6a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-1-1m-1-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Air Conditioner</h5>
                                        <p>Expert AC installation, regular maintenance, and efficient repair services
                                            for
                                            all
                                            brands and models.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#Installation</span>
                                        <span className="chips">#regular maintenance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                        viewBox="0 0 512 512">
                                        <path fill="white"
                                            d="M73 41v78h110V41zm128 0v78h238V41zm199 23a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16m-176 7h48v18h-48zm80 0h48v18h-48zM73 137v350h366V137zm183 30c82.7 0 150 67.3 150 150s-67.3 150-150 150s-150-67.3-150-150s67.3-150 150-150m0 18c-73 0-132 59-132 132s59 132 132 132c48.5 0 90.8-26 113.7-64.9L339.6 360a94.02 94.02 0 0 1-83.6 51a94.02 94.02 0 0 1-94-94a94.02 94.02 0 0 1 94-94a94.02 94.02 0 0 1 85.7 55.3l30.4-24.3c-22.3-41.1-65.9-69-116.1-69m-6.9 62c-50.1 1.1-76.9 51-62 93.9c-.7-37.8 30.1-78 62-93.9m130.6 23.9l-32 25.6A94 94 0 0 1 350 317a94 94 0 0 1-3.5 25.5l31.4 25.2C384.4 352.1 388 335 388 317c0-16.2-2.9-31.8-8.3-46.1" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Washing Machine</h5>
                                        <p>Seamless washing machine installation, thorough periodic servicing, and
                                            prompt repairs to keep your laundry hassle-free.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#installation</span>
                                        <span className="chips">#PeriodicService</span>
                                        <span className="chips">#Repairs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M7 2h10a2 2 0 0 1 2 2v5H5V4a2 2 0 0 1 2-2m12 17a2 2 0 0 1-2 2v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2v-9h14zM8 5v2h2V5zm0 7v3h2v-3z" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Fridge</h5>
                                        <p>Reliable fridge servicing, cooling issue fixes, and professional installation
                                            for all types and brands.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#CoolingFix</span>
                                        <span className="chips">#Maintenance</span>
                                        <span className="chips">#SetupService</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616v14.769q0 .69-.462 1.153T17.384 21zM8 6.77q.31 0 .54-.23T8.77 6t-.23-.54T8 5.23t-.54.23t-.23.54t.23.54t.54.23m3 0q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m1 10.73q1.364 0 2.332-.93t.968-2.27q0-.629-.212-1.22q-.211-.591-.653-1.034L12 9.612l-2.354 2.353q-.473.473-.722 1.077T8.7 14.3q.05 1.339 1.006 2.27T12 17.5m0-.92q-.961 0-1.63-.659q-.67-.66-.67-1.621q0-.452.147-.857t.48-.737L12 11.033l1.744 1.744q.295.294.425.702q.131.408.131.821q0 .962-.67 1.621q-.668.66-1.63.66" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Dish Washer</h5>
                                        <p>Comprehensive dishwasher installations, periodic servicing, and swift repairs
                                            for a spotless performance every time.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#Setup</span>
                                        <span className="chips">#RoutineService</span>
                                        <span className="chips">#QuickRepairs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                                        <defs>
                                            <mask id="ipSOven0">
                                                <g fill="none">
                                                    <rect width="40" height="28" x="4" y="8" fill="#fff" stroke="#fff"
                                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                                                        rx="2" />
                                                    <rect width="16" height="12" x="12" y="16" fill="#000" stroke="#000"
                                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                                                        rx="1" />
                                                    <circle cx="37" cy="15" r="2" fill="#000" />
                                                    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="4" d="M36 22h2m-2 7h2" />
                                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="4" d="M12 36v6m24-6v6" />
                                                </g>
                                            </mask>
                                        </defs>
                                        <path fill="white" d="M0 0h48v48H0z" mask="url(#ipSOven0)" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Oven</h5>
                                        <p>Precise oven repairs, maintenance, and safe installations to keep your
                                            cooking uninterrupted.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#Installation</span>
                                        <span className="chips">#RegularCheckups</span>
                                        <span className="chips">#RepairService</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div
                                className="d-flex align-items-center service-card justify-content-center h-100 fw-semibold border">
                                {/* <!-- categories --> */}
                                Expert Care, Every Repair
                                {/* <!-- <p className="me-5 align-self-start fw-semibold">categories</p> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="showcase__controls d-flex justify-content-end align-items-center mt-3">
                <button className="button button--stroke swiper-button-services-prev "
                    style={{ "--button-stroke": "#0e100f", "--button-hoverColor": "var(--bs-primary)" } as React.CSSProperties} aria-label="Previous"
                    data-block="button">
                    <span className="button__icon button__icon--circle-arrow-left"></span>
                </button>
                <button className="button button--stroke swiper-button-services-next ms-2"
                    style={{ "--button-stroke": "#0e100f", "--button-hoverColor": "var(--color-just-black)" } as React.CSSProperties} aria-label="Next"
                    data-block="button">
                    <span className="button__icon button__icon--circle-arrow-right"></span>
                </button>
            </div>


            {/* <!-- <div className="row">
                <div className="col-md-7">
                    <div className="gray-box">
                        <p className="m-0">
                            From installation to regular maintenance and repairs, we provide expert service for all
                            your essential home appliances, including air conditioners, washing machines, refrigerators,
                            ovens, and dishwashers. With skilled technicians and a commitment to quality, we ensure your
                            appliances run smoothly, efficiently, and for longer.
                        </p>
                        <p className="m-0">
                            From installation to regular maintenance and repairs, we provide expert service for all
                            your essential home appliances, including air conditioners, washing machines, refrigerators,
                            ovens, and dishwashers. With skilled technicians and a commitment to quality, we ensure your
                            appliances run smoothly, efficiently, and for longer.
                        </p>
                        <p className="m-0">
                            From installation to regular maintenance and repairs, we provide expert service for all
                            your essential home appliances, including air conditioners, washing machines, refrigerators,
                            ovens, and dishwashers. With skilled technicians and a commitment to quality, we ensure your
                            appliances run smoothly, efficiently, and for longer.
                        </p>
                        <p className="m-0">
                            From installation to regular maintenance and repairs, we provide expert service for all
                            your essential home appliances, including air conditioners, washing machines, refrigerators,
                            ovens, and dishwashers. With skilled technicians and a commitment to quality, we ensure your
                            appliances run smoothly, efficiently, and for longer.
                        </p>

                        <Image src="/images/album/appliance-repair-11731591351-removebg-preview.png" className="mt-5" width="100%" height="100%" alt=""/>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="gray-box h-100">
                        <h5 className="services-title display-6">
                            Air Conditioner Services
                        </h5>
                        <p className="services-brief">
                            Expert AC installation, regular maintenance, and efficient repair services for all brands
                            and models.
                        </p>

                        <Image src="/images/album/2-air-conditonar.png" className="Image-fluid"  alt="">
                    </div>
                </div>
            </div> --> */}
        </div>
    </section>
        </>
    )
}