import React from 'react';
import './styles.scss';

type Props = {img: string; width: string | number};

const Thumbnail: React.FC<Props> = (props) => {
    return (
        <a className="carousel-item">
            <img
                style={{maxWidth: props.width}}
                src={props.img}
                alt="Thumbnail"
            />
        </a>
    );
};

export default Thumbnail;
