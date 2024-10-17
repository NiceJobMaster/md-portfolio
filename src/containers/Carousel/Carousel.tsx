import Thumbnail from '../../components/Thumbnail/Thumbnail';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.scss';

type Props = {
    options: SwiperOptions;
    list: {
        img: string;
        link: string;
    }[];
    type: 'horizontal' | 'vertical';
};

export const Carousel: React.FC<Props> = ({ options, list, type }) => (
    <Swiper
        {...options}
        className={type === 'vertical' ? 'vertSwiper' : undefined}
        slidesPerView={3}
        centeredSlides={true}
        slideToClickedSlide={true}
        loop={true}
        loopAdditionalSlides={4}
        modules={[Pagination, Navigation]}
        pagination={{
            clickable: true,
        }}
        navigation={{
            enabled: true,
        }}>
        {list?.map(el => (
            <SwiperSlide key={el.img}>
                <Thumbnail
                    type={type === 'vertical' ? 'vertical' : 'horizontal'}
                    img={el.img}
                    link={el.link}></Thumbnail>
            </SwiperSlide>
        ))}
    </Swiper>
);
