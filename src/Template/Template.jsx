
import { useState } from 'react';
import './Template.css';
import PropTypes from 'prop-types';

const Template = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleToggle = (option) => {
		setSelectedOption((prevOption) => (prevOption === option ? null : option));
	};

	return (
		<section className='template'>
			<article>
				<h2>Crear Plantilla</h2>
				<h3>Configuración General</h3>
				<label htmlFor="">Nombre Plantilla</label>
				<input type="text" />
				<label htmlFor="">Tipo de carnet</label>
				<select name="" id="">
					<option value="">Seleccioar</option>
					<option value="">Academico</option>
					<option value="">Empresarial</option>
				</select>
				<label htmlFor="">Ancho</label>
				<input type="text" />
				<label htmlFor="">Alto</label>
				<input type="text" />
				<label htmlFor="">Orientación</label>
				<div>
					<div>Horizontal</div>
					<div>Vertical</div>
				</div>
				<label htmlFor="">Identificador de seguridad</label>
				<input type="radio" name="seguridad" id="" />Código de barras
				<input type="radio" name="seguridad" id="" />Código de QR
				<input type="radio" name="seguridad" id="" />Ninguna
				<label htmlFor="">Cargar Fondo</label>
				<small>Si no cargas una imagen, por defecto el fondo sera de color blanco</small>
				<input type="file" name="" id="" />
				{/* <hr /> */}
				<div >
					<div className='dropdown'>
						<span onClick={() => handleToggle('fotografia')}>Fotografía:</span>
						{/* {selectedOption === 'fotografia' && ( */}
						<div className={selectedOption === 'fotografia' ? "show" : "hidden"}>
							<div className="dropdown-item">Opción 1</div>
							<div className="dropdown-item">Opción 2</div>
							<div className="dropdown-item">Opción 3</div>
						</div>
						{/* )} */}
					</div>
					<div className='dropdown'>
						<span onClick={() => handleToggle('informacion')}>Información:</span>
						{selectedOption === 'informacion' && (
							<div className="dropdown-menu">
								<div className="dropdown-item">Opción 1</div>
								<div className="dropdown-item">Opción 2</div>
								<div className="dropdown-item">Opción 3</div>
							</div>
						)}
					</div>
					<div className='dropdown'>
						<span onClick={() => handleToggle('detalles')}>Detalles:</span>
						{selectedOption === 'detalles' && (
							<div className="dropdown-menu">
								<div className="dropdown-item">Opción 1</div>
								<div className="dropdown-item">Opción 2</div>
								<div className="dropdown-item">Opción 3</div>
							</div>
						)}
					</div>
				</div>
			</article>
			<article>
				<h2>Vista Previa</h2>
				
			</article>
		</section>
	);
};

Template.propTypes = {};

export default Template;