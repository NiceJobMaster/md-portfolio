import React from 'react';
import photoHeader from 'assets/photo_header.png';
import photoTT from 'assets/tt.png';
import photoYT from 'assets/yt.png';
import photoIG from 'assets/ig.png';

import './Header.scss';

export const Header = () => (
    <div className="header">
        <div className="headerInfo">Cześć, tu Miłosz</div>
        <div className="headerMessage">
            TWORZĘ filmy i PROWADZĘ social media dla firm oraz influencerów.
        </div>
        <div className="photoHeaderWrapper">
            <div className="socialPhotos">
                <img className="photoTT" src={photoTT} />
                <img className="photoYT" src={photoYT} />
                <img className="photoIG" src={photoIG} />
            </div>
            <img className="photoHeader" src={photoHeader} />
        </div>
    </div>
);
