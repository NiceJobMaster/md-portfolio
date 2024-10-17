import { ShortAndTiktokDataProp } from 'App';
import { youtube } from 'common/youtube';
import { Carousel } from 'containers/Carousel/Carousel';
import React from 'react';
import './Projects.scss';

interface ProjectsProps {
    shortAndTiktokData: ShortAndTiktokDataProp[];
}

export const Projects = ({ shortAndTiktokData }: ProjectsProps) => (
    <div className="projects">
        <div className="projectsInfo">Projekty</div>
        <div className="projectsMessage">
            Realizuję wszystkie formy wideo -{' '}
            <span>
                długie formaty, shorty, wydarzenia na żywo, filmy reklamowe i
                promocyjne
            </span>{' '}
            - wraz z oprawą graficzną i publikacją! <br />
            Poniżej kilka z moich zrealizowanych projektów.
        </div>
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
