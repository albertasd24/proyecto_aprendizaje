"use client";
import React, { useEffect, useState } from 'react';
import './DragDrop.css';
import PropTypes from 'prop-types';

const DragDrop = ({ }) => {
	const [dragging, setDragging] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	const containerRef = React.useRef(null);

	const handleMouseDown = (e) => {
		setDragging(true);
		const containerRect = containerRef.current.getBoundingClientRect();
		setOffset({
			x: e.clientX - containerRect.left - position.x,
			y: e.clientY - containerRect.top - position.y
		});
	};

	const handleMouseUp = () => {
		setDragging(false);
	};

	const handleMouseMove = (e) => {
		if (dragging) {
			const containerRect = containerRef.current.getBoundingClientRect();
			const maxX = containerRect.width - 100; // Ajusta el tamaño del elemento draggable
			const maxY = containerRect.height - 100; // Ajusta el tamaño del elemento draggable

			let newX = e.clientX - containerRect.left - offset.x;
			let newY = e.clientY - containerRect.top - offset.y;

			newX = Math.min(Math.max(newX, 0), maxX);
			newY = Math.min(Math.max(newY, 0), maxY);

			setPosition({
				x: newX,
				y: newY
			});
		}
	};

	useEffect(() => {
		console.log("po");
	}, [position])

	const changePositionX = (e) => {
		let positionX = parseInt(e.target.value, 10).toString() || 0;
		setPosition({ x: positionX, y: position.y })
	}
	const changePositionY = (e) => {
		// let positionY = parseInt(e.target.value, 10).toString() || 0;
		let positionY = isNaN(parseInt(e.target.value, 10)) ? 0 : parseInt(e.target.value, 10).toString() || 0;
		setPosition({ x: position.x, y: positionY})
	}

	return (
		<div className="">
			<div
				className="container"
				ref={containerRef}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}
			>
				<div
					className="draggable"
					style={{
						left: position.x + 'px',
						top: position.y + 'px',
						position: 'absolute',
						cursor: dragging ? 'grabbing' : 'grab'
					}}
					draggable="false"
				>
					Drag me! {`X: ${position.x}`} {`X: ${position.y}`}
				</div>

			</div>
			<label htmlFor="">X:</label>
			<input type="number" value={position.x} onChange={changePositionX} />
			butt
			<label htmlFor="">Y:</label>
			<input type="number" value={position.y} onChange={changePositionY} />
			<input type="number" name="" id="" />
		</div>
	);
}
DragDrop.propTypes = {};

export default DragDrop;