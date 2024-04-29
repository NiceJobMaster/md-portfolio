import React from 'react';

import './Modal.scss';

export const Modal = ({closeModal, children}) => {
    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (
                    (e.target as HTMLDivElement).className === 'modal-container'
                )
                    closeModal();
            }}>
            <div className="modal">
                <p className="close" onClick={closeModal}>
                    &times;
                </p>
                {children}
            </div>
        </div>
    );
};
