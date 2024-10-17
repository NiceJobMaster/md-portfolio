import React from 'react';

import logoShort from 'assets/logo_short.png';
import logoLong from 'assets/logo_long.png';

import './Navbar.scss';
import { Button } from 'components/Button/Button';

export const Navbar = () => (
    <div className="navbar">
        <div className="logoWrapper">
            <img className="logoShort" src={logoShort} />
            <img className="logoLong" src={logoLong} />
        </div>
        <div className="navbarButtons">
            <Button text="Projekty" onClick={() => {}} />
            <Button text="O mnie" onClick={() => {}} />
            <Button text="Kontakt" onClick={() => {}} />
        </div>
    </div>
);
