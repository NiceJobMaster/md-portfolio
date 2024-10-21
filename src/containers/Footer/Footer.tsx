import React from 'react';
import './Footer.scss';
import { Button } from 'components/Button/Button';

export const Footer = () => {
    const scrollTo = id => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <div className="footer">
            <div className="topFooter">
                <div className="firstFooter">
                    <div className="footerText">Woodpecker’s Productions</div>
                    <div className="footerText">Miłosz Dzięciołowski</div>
                </div>
                <div className="buttonWrapper">
                    <Button
                        text="Projekty"
                        style="textButton"
                        textColor="textColorGray"
                        onClick={() => scrollTo('projects')}
                    />
                    <Button
                        text="O mnie"
                        style="textButton"
                        textColor="textColorGray"
                        onClick={() => scrollTo('aboutMe')}
                    />
                    <Button
                        text="Kontakt"
                        style="textButton"
                        textColor="textColorGray"
                        onClick={() => scrollTo('contact')}
                    />
                </div>
            </div>
            <div className="line" />
            <div className="footerText">Copyright © 2024 Kamil Marszałek</div>
        </div>
    );
};
