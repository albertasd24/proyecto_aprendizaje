import React from 'react';

const FotografiaTemplate = ({ onMouseDown }) => {
    return (
        <div
            className="foto"
            onMouseDown={onMouseDown}
            style={{ cursor: 'grab' }}
            draggable="false"
        >
            Fotografía
        </div>
    );
};

export default FotografiaTemplate;
