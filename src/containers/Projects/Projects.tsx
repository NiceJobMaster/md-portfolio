import { ShortAndTiktokDataProp } from 'App';
import { youtube } from 'common/youtube';
import { Carousel } from 'containers/Carousel/Carousel';
import React from 'react';

interface ProjectsProps {
    shortAndTiktokData: ShortAndTiktokDataProp[];
}

export const Projects = ({ shortAndTiktokData }: ProjectsProps) => (
    <div>
        <Carousel
            options={{
                breakpoints: {
                    1230: {
                        slidesPerView: 5,
                    },
                },
            }}
            list={youtube}
            type="horizontal"
        />
        <Carousel
            options={{
                breakpoints: {
                    740: {
                        slidesPerView: 5,
                    },
                    1230: {
                        slidesPerView: 7,
                    },
                },
            }}
            list={shortAndTiktokData}
            type="vertical"
        />
    </div>
);
