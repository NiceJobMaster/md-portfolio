import React from 'react';
import './Button.scss';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    style: 'textButton' | 'bigButton' | 'normalButton';
    type?: 'submit';
    color?: 'orange';
}

export const Button = ({ text, onClick, style, type, color }: ButtonProps) => (
    <button
        className={`button ${style} ${color}`}
        onClick={onClick}
        type={type}>
        {text}
    </button>
);
