import React from 'react';
import './Button.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => (
    <button className="button" onClick={onClick}>
        {text}
    </button>
);
