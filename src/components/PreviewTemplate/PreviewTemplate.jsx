import React, { useState } from 'react';
import './PreviewTemplate.css';
import FotografiaTemplate from '../FotografiaTemplate/FotografiaTemplate';
import CodeBar from '../CodeBar/CodeBar';
import CodeQr from '../CodeQr/CodeQr';

const PreviewTemplate = ({photoDimension, seguridad = "Ninguno" }) => {
    const [dragging, setDragging] = useState(false);
    const [draggedElement, setDraggedElement] = useState(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [fotoPosition, setFotoPosition] = useState({ x: 0, y: 0 });
    const [codeBarPosition, setCodeBarPosition] = useState({ x: 0, y: 0 });
    const [codeQrPosition, setCodeQrPosition] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e, element, setPosition) => {
        const containerRect = element.parentElement.getBoundingClientRect();
        setDragging(true);
        setDraggedElement(element);
        const rect = element.getBoundingClientRect();
        setOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleMouseMove = (e) => {
        if (dragging && draggedElement) {
            const containerRect = draggedElement.parentElement.getBoundingClientRect();
            const maxX = containerRect.width - draggedElement.offsetWidth;
            const maxY = containerRect.height - draggedElement.offsetHeight;

            let newX = e.clientX - containerRect.left - offset.x;
            let newY = e.clientY - containerRect.top - offset.y;

            newX = Math.min(Math.max(newX, 0), maxX);
            newY = Math.min(Math.max(newY, 0), maxY);

            draggedElement.style.left = newX + 'px';
            draggedElement.style.top = newY + 'px';

            // Actualizar las posiciones X e Y del elemento arrastrado
            if (draggedElement.classList.contains('foto')) {
                setFotoPosition({
                    x: newX,
                    y: newY
                });
            } else if (draggedElement.classList.contains('codeBar')) {
                setCodeBarPosition({
                    x: newX,
                    y: newY
                });
            } else if (draggedElement.classList.contains('codeQr')) {
                setCodeQrPosition({
                    x: newX,
                    y: newY
                });
            }
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
        setDraggedElement(null);
    };

    return (
        <div className="preview">
            <div className="preview-carnet" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                <FotografiaTemplate
                    dimensions={photoDimension}
                    onMouseDown={(e) => handleMouseDown(e, e.currentTarget, setFotoPosition)}
                    position={fotoPosition}
                />
                {seguridad == "CodBarra" && (
                    <CodeBar
                        onMouseDown={(e) => handleMouseDown(e, e.currentTarget, setCodeBarPosition)}
                        position={codeBarPosition}
                    />
                )}
                {seguridad == "CodQR" && (
                    <CodeQr
                        onMouseDown={(e) => handleMouseDown(e, e.currentTarget, setCodeQrPosition)}
                        position={codeQrPosition}
                    />
                )}
            </div>
            <div>
                <h3>Fotografía:</h3>
                <label>Posición X:</label>
                <input type="text" value={fotoPosition.x} readOnly />
                <label>Posición Y:</label>
                <input type="text" value={fotoPosition.y} readOnly />

                {seguridad !== "CodBarra" && (
                    <>
                        <h3>Código de barras:</h3>
                        <label>Posición X:</label>
                        <input type="text" value={codeBarPosition.x} readOnly />
                        <label>Posición Y:</label>
                        <input type="text" value={codeBarPosition.y} readOnly />
                    </>
                )}

                {seguridad !== "CodQR" && (
                    <>
                        <h3>Código QR:</h3>
                        <label>Posición X:</label>
                        <input type="text" value={codeQrPosition.x} readOnly />
                        <label>Posición Y:</label>
                        <input type="text" value={codeQrPosition.y} readOnly />
                    </>
                )}
            </div>
        </div>
    );
};

export { PreviewTemplate };
