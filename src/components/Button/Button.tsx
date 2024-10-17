import React from 'react';
import './Button.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
    type: 'textButton' | 'bigButton';
}

export const Button = ({ text, onClick, type }: ButtonProps) => (
    <button className={`button ${type}`} onClick={onClick}>
        {text}
    </button>
);
