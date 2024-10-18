import React, { useState } from 'react';

import { Button } from 'components/Button/Button';
import './ContactForm.scss';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    function submit(e) {
        e.preventDefault();

        fetch('http://localhost:3000/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ email, message }),
        })
            .then(res => res.json())
            .then(res => {
                if (res.code === 200) {
                    setSubmitted(true);
                } else {
                    setError(res.message);
                }
            })
            .catch(error => setError(error));
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (submitted) {
        return (
            <p>
                We&apos;ve received your message, thank you for contacting us!
            </p>
        );
    }

    return (
        <form onSubmit={submit} className="contactForm">
            <label htmlFor="name">Imię</label>
            <input
                id="name"
                type="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />
            <label htmlFor="surname">Nazwisko</label>
            <input
                id="surname"
                type="surname"
                value={surname}
                onChange={e => setSurname(e.target.value)}
                required
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />

            <label htmlFor="message">Wiadomość</label>
            <textarea
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <div className="buttonWrapper">
                <Button type="submit" text="WYŚLIJ" style="normalButton" />
            </div>
        </form>
    );
};
