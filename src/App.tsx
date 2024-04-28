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
    const [shortAndTiktokData, setShortAndTiktokData] = useState([...shorts]);

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
            getJSON(el.link).then((data) =>
                setTiktokData((prevData) => [
                    ...prevData,
                    ...[{img: data.thumbnail_url}],
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
                                    img={el.img}></Thumbnail>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        slidesPerView={1}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
                        breakpoints={{
                            850: {
                                slidesPerView: 5,
                            },
                            1230: {
                                slidesPerView: 5,
                            },
                        }}
                        className="vertSwiper">
                        {shortAndTiktokData.map((el) => (
                            <SwiperSlide key={el.img}>
                                <Thumbnail
                                    type={'horizontal'}
                                    img={el.img}></Thumbnail>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
            {/* 
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/MwmHOsmjVcM"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal2" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/AyRlpz7RU30"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal3" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/oeWSh7_xs4A"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal4" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/H0FtI0_H1LE"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal5" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/muLopAY_DAI"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal6" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/9B0SK2pguF0"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal7" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/AMXJ_z4oLhg"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal8" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/XEoS9O5cO-Q"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal9" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/xB2WeFkvhJg"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal10" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/0Xfj4CUidhw"
                        allowFullScreen></iframe>
                </div>
            </div>

            <div id="modal11" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/cHsDZPWwxV4"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal12" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/fkziwfG2D14"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal13" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/kAMl4ci_Ngg"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal14" className="modal">
                <div className="modal-content">
                    <iframe
                        width="315"
                        height="560"
                        src="https://www.youtube.com/embed/eLwE1qm1cIQ"
                        allowFullScreen></iframe>
                    <iframe
                        width="315"
                        height="560"
                        src="https://www.youtube.com/embed/iEVaxBIvUD4"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div id="modal15" className="modal">
                <div className="modal-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.tiktok.com/embed/v2/7171434026929081605"
                        allowFullScreen></iframe>
                </div>
            </div> */}
        </div>
    );
};
export default App;
