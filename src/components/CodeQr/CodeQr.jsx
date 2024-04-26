import React from 'react';

const CodeQr = ({ onMouseDown }) => {
    return (
        <div
            className='codeQr'
            onMouseDown={onMouseDown}
            style={{ cursor: 'grab' }}
        >
            Código QR
        </div>
    );
};

export default CodeQr;