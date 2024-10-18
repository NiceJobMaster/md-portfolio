import React from 'react';
import './Button.scss';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    style: 'textButton' | 'bigButton' | 'normalButton';
    type?: 'submit';
    color?: 'orange';
    textColor?: 'textColorGray';
}

export const Button = ({
    text,
    onClick,
    style,
    type,
    color,
    textColor,
}: ButtonProps) => (
    <button
        className={`button ${style} ${color} ${textColor}`}
        onClick={onClick}
        type={type}>
        {text}
    </button>
);
