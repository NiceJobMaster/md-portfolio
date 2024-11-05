import React from 'react';
import './Loader.scss';

interface LoaderProps {
    type?: 'small';
}

export const Loader = ({ type }: LoaderProps) => (
    <div className={`loadingWrapper ${type}`}>
        <div className="loading"></div>
    </div>
);
