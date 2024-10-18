import React, { useState } from 'react';
import './AboutMe.scss';
import photo1 from 'assets/photo_1.png';
import photo2 from 'assets/photo_2.png';
import photo3 from 'assets/photo_3.png';
import photo4 from 'assets/photo_4.png';
import photo5 from 'assets/photo_5.png';
import photo6 from 'assets/photo_6.png';
import photo7 from 'assets/photo_7.png';
import photo8 from 'assets/photo_8.png';
import photo9 from 'assets/photo_9.png';
import photo10 from 'assets/photo_10.png';
import { Button } from 'components/Button/Button';

export const AboutMe = () => {
    const [isExtend, setIsExtend] = useState<boolean>(false);
    const extend = () => setIsExtend(!isExtend);

    const photosStyles = isExtend ? 'photos' : 'photos noExtend';

    return (
        <div className="aboutMe">
            <div className="aboutMeInfo">O MNIE</div>
            <div className="aboutMeMessage">
                Za moim doświadczeniem stoi wiele udanych projektów, które
                realizowałem przez ostatnie 5 lat mojej działalności jako{' '}
                <span>The Woodpecker’s Productions</span>. Współpracowałem z
                niesamowitymi ludźmi i z wieloma z nich do tej pory tworzę nowe
                projekty. A oto kilka zdjęć zza kulis naszej pracy!
            </div>
            <div className={photosStyles}>
                <div className="row">
                    <div className="column">
                        <img className="photo1" src={photo1} />
                        <img className="photo2" src={photo2} />
                    </div>
                    <div>
                        <img className="photo3" src={photo3} />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <img className="photo4" src={photo4} />
                    </div>
                    <div>
                        <img className="photo5" src={photo5} />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <img className="photo6" src={photo6} />
                    </div>
                    <div className="column">
                        <img className="photo7" src={photo7} />
                        <img className="photo8" src={photo8} />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <img className="photo9" src={photo9} />
                    </div>
                    <div>
                        <img className="photo10" src={photo10} />
                    </div>
                </div>
            </div>
            <div className="extendButton">
                <Button
                    style="bigButton"
                    text={isExtend ? 'ZWIŃ' : 'ROZWIŃ'}
                    onClick={extend}
                />
            </div>
        </div>
    );
};
