import React, {useEffect, useMemo, useState} from 'react';
import {youtube} from './common/youtube';
import Thumbnail from './components/Thumbnail/Thumbnail';
import {shorts} from './common/shorts';
import {tiktok} from './common/tiktok';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

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
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
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
                        slidesPerView={3}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
                        breakpoints={{
                            740: {
                                slidesPerView: 5,
                            },
                            1230: {
                                slidesPerView: 7,
                            },
                        }}
                        className="vertSwiper">
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
