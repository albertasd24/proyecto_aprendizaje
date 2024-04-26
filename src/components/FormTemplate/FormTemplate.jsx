import React, { useState } from 'react';
import './FormTemplate.css';
import PropTypes from 'prop-types';
import { PreviewTemplate } from '../PreviewTemplate';

const FormTemplate = ({ }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [seguridad, setSeguridad] = useState("Ninguno");
	const [photoDimension, setPhotoDimension] = useState({ width: 2.8, height: 3 })

	const handleToggle = (option) => {
		setSelectedOption((prevOption) => (prevOption === option ? null : option));
	};

	const changePhotoDimensionHeight = (e) => {
		console.log(e.target.value);
		let photoHeight = isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value,10).toString() || 0;
		setPhotoDimension({ width: photoDimension.width, height: photoHeight });
		console.log(photoDimension);
	}

	const changePhotoDimensionWith = (e) => {
		let photoWidth = isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value,10).toString() || 0;
		setPhotoDimension({ width: photoWidth, height: photoDimension.height });
		console.log(photoDimension);
	}

	return (
		<section className='template'>
			<article>
				<h1>Crear Plantilla</h1>
				<h4>Configuración General</h4>
				<div>
					<label htmlFor="">Nombre Plantilla</label>
					<input type="text" />
					<label htmlFor="">Tipo plantilla</label>
					<select name="" id="">
						<option value="" selected disabled>Seleccionar</option>
						<option value="">Colegio</option>
						<option value="">Empresa</option>
					</select>
					<label htmlFor="">Ancho</label>
					<input type="number" name="" min={0} id="" />
					<label htmlFor="">Alto</label>
					<input type="number" name="" min={0} id="" />
					<label htmlFor="">Orientación</label>
					<div>
						<div>Horizontal</div>
						<div>Vertical</div>
					</div>
					<label htmlFor="">Identificador de seguridad</label>
					<input type="radio" name="seguridad" value={"CodBarra"} onChange={() => setSeguridad("CodBarra")} />Código de Barra
					<input type="radio" name="seguridad" value={"CodQR"} onChange={() => setSeguridad("CodQR")} />Código QR
					<input type="radio" name="seguridad" value={"Ninguno"} onChange={() => setSeguridad("Ninguno")} />Ninguno
					<label htmlFor="">Cargar Fondo</label>
					<small>Si no carga fondo, se usara el color blanco por defecto</small>
					<input type="file" name="" id="" />
				</div>
				<div>
					<h3 onClick={() => handleToggle('fotografia')}>Fotografía</h3>
					{selectedOption === 'fotografia' && (
						<div className="dropdown-menu">
							<label htmlFor="">Ancho</label>
							<input type="number" value={photoDimension.width} onChange={changePhotoDimensionWith} />
							<label htmlFor="">Alto</label>
							<input type="number" value={photoDimension.height} onChange={changePhotoDimensionHeight} />
						</div>
					)}
				</div>

				<div>
					<h3 onClick={() => handleToggle('informacion')}>Información:</h3>
					{selectedOption === 'informacion' && (
						<div className="dropdown-menu">
							<div className="dropdown-item">Opción 1</div>
							<div className="dropdown-item">Opción 2</div>
							<div className="dropdown-item">Opción 3</div>
						</div>
					)}
				</div>

				<div>
					<h3 onClick={() => handleToggle('detalles')}>Detalles:</h3>
					{selectedOption === 'detalles' && (
						<div className="dropdown-menu">
							<div className="dropdown-item">Opción 1</div>
							<div className="dropdown-item">Opción 2</div>
							<div className="dropdown-item">Opción 3</div>
						</div>
					)}
				</div>
			</article>
			<article>
				<h2>Vista Previa</h2>
				<PreviewTemplate photoDimension={photoDimension} seguridad={seguridad} />
			</article>
		</section>
	);
}

FormTemplate.propTypes = {};

export default FormTemplate;