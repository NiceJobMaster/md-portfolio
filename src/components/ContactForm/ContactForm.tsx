import React, { useState } from 'react';

import { Button } from 'components/Button/Button';
import './ContactForm.scss';
import { Loader } from 'components/Loader/Loader';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<Error>();

    async function submit(e) {
        e.preventDefault();

        setLoading(true);
        await fetch('https://woodpeckers-productions.pl/server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                email,
                first_name: name,
                last_name: surname,
                message,
            }),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return setSubmitted(true);
            })
            .catch(error => setError(error));
        setLoading(false);
    }

    if (loading) {
        return (
            <div className="contactFormMessage">
                <Loader type="small" />
            </div>
        );
    }

    if (error) {
        return <p className="contactFormMessage">{error.message}</p>;
    }

    if (submitted) {
        return (
            <p className="contactFormMessage">
                Wiadomość wysłana. <br />
                Dziękuję {name}, skontaktujemy się z Tobą wkrótce.
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
                required
            />
            <div className="buttonWrapper">
                <Button type="submit" text="WYŚLIJ" style="normalButton" />
            </div>
        </form>
    );
};
