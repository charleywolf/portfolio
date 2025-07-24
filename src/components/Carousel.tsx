"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { StaticImageData } from "next/image";

export default function Carousel({ images }: { images: StaticImageData[] }) {
  return (
    <div className="w-full flex">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        lazyPreloadPrevNext={2}
        modules={[Pagination, Navigation]}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="">
            <div className="flex justify-center items-center h-full w-full pb-8">
              <Image
                src={img}
                alt="Preview Screenshot"
                className="h-[17.3rem] w-auto rounded-lg border-2 shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
