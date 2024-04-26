import React from 'react';

const CodeBar = ({ onMouseDown }) => {
    return (
        <div
            className='codeBar'
            onMouseDown={onMouseDown}
            style={{ cursor: 'grab' }}
        >
            Código de barras
        </div>
    );
};

export default CodeBar;
