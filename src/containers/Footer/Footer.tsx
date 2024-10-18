import React from 'react';
import './Footer.scss';
import { Button } from 'components/Button/Button';

export const Footer = () => (
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
                />
                <Button
                    text="O mnie"
                    style="textButton"
                    textColor="textColorGray"
                />
                <Button
                    text="Kontakt"
                    style="textButton"
                    textColor="textColorGray"
                />
            </div>
        </div>
        <div className="line" />
        <div className="footerText">Copyright © 2024 Kamil Marszałek</div>
    </div>
);
