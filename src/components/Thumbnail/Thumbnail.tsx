import React, {useState} from 'react';
import './Thumbnail.scss';
import {Modal} from '../Modal/Modal';
import {createPortal} from 'react-dom';

type Props = {
    img: string;
    link: string;
    type: 'horizontal' | 'vertical';
};

const Thumbnail: React.FC<Props> = ({img, link, type}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const carouselItemHandle = () => {
        setModalOpen(true);
    };

    const modalCloseHandler = () => {
        setModalOpen(false);
    };

    const aspectRatio = type === 'horizontal' ? 9 / 16 : 16 / 9;

    return (
        <>
            <div className="carousel-item" onClick={carouselItemHandle}>
                <img className={type} src={img} alt="Thumbnail" />
            </div>
            {modalOpen &&
                createPortal(
                    <Modal closeModal={modalCloseHandler}>
                        <div
                            style={{
                                maxWidth:
                                    type === 'vertical'
                                        ? window.innerWidth
                                        : (window.innerHeight * 0.9 - 56) *
                                          0.56,
                                maxHeight:
                                    type === 'horizontal'
                                        ? window.innerHeight * 0.9 - 56 >
                                          (window.innerWidth * 0.9 - 56) * 1.77
                                            ? (window.innerWidth * 0.9 - 56) *
                                              1.77
                                            : window.innerHeight * 0.9 - 56
                                        : 'unset',
                                height: type === 'horizontal' ? 1080 : 'unset',
                            }}
                            className="video-container">
                            <iframe
                                style={{
                                    aspectRatio,
                                }}
                                className="iframe"
                                src={link}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                frameBorder={0}></iframe>
                        </div>
                    </Modal>,
                    document.body,
                )}
        </>
    );
};

export default Thumbnail;
