import React, {useEffect, useMemo, useState} from 'react';
import {youtube} from './common/youtube';
import Thumbnail from './components/Thumbnail/Thumbnail';
import {shorts} from './common/shorts';
import {tiktok} from './common/tiktok';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation, Pagination} from 'swiper/modules';

import './styles.scss';

const App: React.FC = () => {
    const [tiktokData, setTiktokData] = useState([]);
    const [shortAndTiktokData, setShortAndTiktokData] = useState([]);

    const getJSON = async (url: string) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(response.statusText);

            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    };

    const getData = () => {
        tiktok.map((el) =>
            getJSON(el.apiLink).then((data) =>
                setTiktokData((prevData) => [
                    ...prevData,
                    ...[
                        {
                            img: data.thumbnail_url,
                            link: el.link,
                        },
                    ],
                ]),
            ),
        );
    };

    const appendShortAndTiktok = () =>
        setShortAndTiktokData([...shorts, ...tiktokData]);

    useMemo(() => {
        if (tiktokData.length > 1) appendShortAndTiktok();
    }, [tiktokData]);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="wrapper">
            {shortAndTiktokData.length <= shorts.length ? (
                <div className="loadingWrapper">
                    <div className="loading"></div>
                </div>
            ) : (
                <div>
                    <Swiper
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
                        }}
                        breakpoints={{
                            1230: {
                                slidesPerView: 5,
                            },
                        }}>
                        {youtube?.map((el) => (
                            <SwiperSlide key={el.img}>
                                <Thumbnail
                                    type={'vertical'}
                                    img={el.img}
                                    link={el.link}></Thumbnail>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        className="vertSwiper"
                        slideToClickedSlide={true}
                        slidesPerView={3}
                        centeredSlides={true}
                        loop={true}
                        loopAdditionalSlides={4}
                        modules={[Pagination, Navigation]}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            enabled: true,
                        }}
                        breakpoints={{
                            740: {
                                slidesPerView: 5,
                            },
                            1230: {
                                slidesPerView: 7,
                            },
                        }}>
                        {shortAndTiktokData.map((el) => (
                            <SwiperSlide key={el.img}>
                                <Thumbnail
                                    type={'horizontal'}
                                    img={el.img}
                                    link={el.link}></Thumbnail>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
};
export default App;
