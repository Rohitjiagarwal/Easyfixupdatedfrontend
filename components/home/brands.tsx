"use client"

import Image from "next/image";
import {Swiper , SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';


export default function Brands() {
    return (
        <>
        <section className="brands py-4 my-5" data-aos="fade-up">
        <div className="container">
            <div className="mb-7 text-right">
                <h6 className="text-primary section-title text-uppercase">Brands We Service</h6>
                {/* <!-- <h2 className="display-5 fw-bold">Partnering with Leading Brands to <br />Deliver <span className="gradient-text">Quality</span> Service
                </h2> --> */}
                <h2 className="display-5 fw-bold section-subtitle">
                    Expert Care for Your Trusted <span className="gradient-text">Brands</span> <br />From Samsung to LG and
                    More
                </h2>
            </div>
            <div className="brands-swiper-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide>
          <Image src="/images/album/brands/bosch.svg" width={100} height={60} alt="Bosch" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/album/brands/godrej.svg" width={100} height={60} alt="Godrej" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/album/brands/ifb-logo.svg" width={100} height={60} alt="IFB" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/album/brands/lg.svg" width={100} height={60} alt="LG" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/album/brands/samsung.svg" width={100} height={60} alt="Samsung" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/album/brands/whirlpool.svg" width={100} height={60} alt="Whirlpool" />
        </SwiperSlide>
      </Swiper>
    </div>
        </div>
    </section>
        </>
    )
}