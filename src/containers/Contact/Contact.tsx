import React from 'react';
import './Contact.scss';
import { ContactForm } from 'components/ContactForm/ContactForm';
import phoneImage from 'assets/phone.png';
import messageImage from 'assets/message.png';
import linkedinImage from 'assets/LinkedIn.png';
import facebookImage from 'assets/Facebook.png';
import { Button } from 'components/Button/Button';

export const Contact = () => (
    <div className="contact">
        <div className="contactInfo">BĄDŹMY W KONTAKCIE</div>
        <div className="contactMessage">
            Potrzebujesz wyceny? Więcej szczegółów na temat mojej działalności?
            Albo po prostu chcesz pogadać o swoim projekcie? Napisz, lub
            zadzwoń, a z wielką chęcią odpowiem na wszystkie Twoje pytania!
        </div>
        <div className="contactWrapper">
            <div className="leftContainer">
                <div className="contactText">KONTAKT</div>
                <ContactForm />
            </div>
            <div className="rightContainer">
                <div className="infoWrapper firstInfo">
                    <img src={phoneImage} />
                    <div className="contactTextInfo">NUMER TELEFONU</div>
                    <div className="contactTextMessage">+48 792 854 481</div>
                </div>
                <div className="infoWrapper secondInfo">
                    <img src={messageImage} />
                    <div className="contactTextInfo">ADRES EMAIL</div>
                    <div className="contactTextMessage">
                        video@woodpeckers-productions.pl
                    </div>
                </div>
                <div className="infoWrapper firstInfo">
                    <img src={linkedinImage} />
                    <div className="contactTextInfo">LINKEDIN</div>
                    <div className="contactTextMessage">
                        Miłosz Dzięciołowski
                    </div>
                </div>
                <div className="infoWrapper secondInfo">
                    <img src={facebookImage} />
                    <div className="contactTextInfo">FACEBOOK</div>
                    <div className="contactTextMessage">
                        Miłosz Dzięciołowski
                    </div>
                </div>
                <div className="buttonWrapper">
                    <Button
                        text="WYŚWIETL CV"
                        style="normalButton"
                        color="orange"
                    />
                </div>
            </div>
        </div>
    </div>
);
