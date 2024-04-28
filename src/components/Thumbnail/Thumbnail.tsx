import React from 'react';
import './styles.scss';

type Props = {img: string; type: 'horizontal' | 'vertical'};

const Thumbnail: React.FC<Props> = (props) => {
    return (
        <a className="carousel-item">
            <img className={props.type} src={props.img} alt="Thumbnail" />
        </a>
    );
};

export default Thumbnail;
