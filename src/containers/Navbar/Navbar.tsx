import React from 'react';

import logoShort from 'assets/logo_short.png';
import logoLong from 'assets/logo_long.png';

import './Navbar.scss';
import { Button } from 'components/Button/Button';

export const Navbar = () => {
    const scrollTo = id => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <div className="navbar">
            <div className="logoWrapper">
                <img className="logoShort" src={logoShort} />
                <img className="logoLong" src={logoLong} />
            </div>
            <div className="navbarButtons">
                <Button
                    style="textButton"
                    text="Projekty"
                    onClick={() => scrollTo('projects')}
                />
                <Button
                    style="textButton"
                    text="O mnie"
                    onClick={() => scrollTo('aboutMe')}
                />
                <Button
                    style="textButton"
                    text="Kontakt"
                    onClick={() => scrollTo('contact')}
                />
            </div>
        </div>
    );
};
