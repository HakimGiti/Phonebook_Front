'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import MainSlide from '@/public/images/about-img.jpg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AutoplayOptions, NavigationOptions, PaginationOptions } from 'swiper/types';
interface BaseTProps {}

export type BaseProps<T extends BaseTProps> = {
  items: T[];
  sliderItem: (item: T, idx?: number) => JSX.Element;
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  responsive?: boolean;
  pagination?: boolean | PaginationOptions | undefined;
  navigation?: boolean | NavigationOptions | undefined;
  autoplay?: boolean | AutoplayOptions | undefined;
};

export const Slider = <T extends BaseTProps>(props: BaseProps<T>) => {
  const {
    items,
    sliderItem,
    slidesPerView = 1,
    spaceBetween = 2,
    loop = true,
    pagination = {
      clickable: true,
      type: 'bullets',
    },
    navigation = {
      enabled: true,
      nextEl: null,
      prevEl: null,
    },
    responsive = true,
    autoplay = {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  } = props;
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      pagination={pagination}
      navigation={navigation}
      autoplay={autoplay}
      // modules={[Navigation, Pagination, Autoplay]}
      breakpoints={
        responsive
          ? {
              200: {
                width: 200,
                slidesPerView: 1,
              },
              576: {
                width: 576,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },

              900: {
                width: 900,
                slidesPerView: 3,
              },

              1200: {
                width: 1200,
                slidesPerView: slidesPerView,
              },
            }
          : undefined
      }
      className="mySwiper w-full h-auto rounded-xl"
    >
      {items?.length ? (
        items?.map((item, idx) => <SwiperSlide key={idx}>{sliderItem(item, idx)}</SwiperSlide>)
      ) : (
        <SwiperSlide>
          <div className="w-full relative shadow-md">
            <div className="w-full  relative border ">{<Image src={MainSlide} alt="" fill />}</div>
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-6 right-2 md:right-6 text-white bg-black/30 p-2 text-right"></div>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
};