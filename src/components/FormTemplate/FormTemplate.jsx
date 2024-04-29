import { useState } from 'react';
import './FormTemplate.css';
import PropTypes from 'prop-types';
import { PreviewTemplate } from '../PreviewTemplate';

const FormTemplate = ({ }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [seguridad, setSeguridad] = useState("Ninguno");
	const [background, setBackground] = useState();
	const [orientation, setOrientation] = useState("vertical");
	const [backgroundUrL, setBackgroundUrl] = useState("");
	const [tipoSectorPlantilla, setTipoSectorPlantilla] = useState("");
	const [photoDimension, setPhotoDimension] = useState({ width: 2.8, height: 3 })
	const [templateDimension, setTemplateDimension] = useState({ width: 5.5, height: 8.5 })

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
	const changeTemplateDimensionHeight = (e) => {
		console.log(e.target.value);
		let templateHeight = isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value,10).toString() || 0;
		setTemplateDimension({ width: templateDimension.width, height: templateHeight });
		console.log(photoDimension);
	}

	const changeTemplateDimensionWith = (e) => {
		let templateWidth = isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value,10).toString() || 0;
		setTemplateDimension({ width: templateWidth, height: photoDimension.height });
		console.log(photoDimension);
	}

	const uploadBackgroundTemplate = (e) => {
		console.log(e.target.files[0]);
		const urlImage = URL.createObjectURL(e.target.files[0]);
		setBackgroundUrl(urlImage)
	}

	const changeOrientation = (orientation) => {
		if (orientation === "vertical") {
            setOrientation("vertical");
			setTemplateDimension({width:templateDimension.height, height: templateDimension.width})
        } else {
            setOrientation("horizontal");
			setTemplateDimension({width:templateDimension.height, height: templateDimension.width})
        }
	}

	return (
		<section className='template'>
			<article>
				<h1>Crear Plantilla</h1>
				<h4>Configuración General</h4>
				<div>
					<label htmlFor="nameTemlate">Nombre Plantilla</label>
					<input type="text" id='nameTemlate' />
					<label htmlFor="">Sector del tipo plantilla</label>
					<select name="" id="" onChange={(e) => setTipoSectorPlantilla(e.target.value)}>
						<option value="" selected disabled>Seleccionar</option>
						<option value="academico">Academico</option>
						<option value="empresarial">Empresarial</option>
					</select>
					<label htmlFor="withTemplate">Ancho </label>
					<input type="number" name="" min={0} value={templateDimension.width}  id="withTemplate" onChange={changeTemplateDimensionWith} />
					<label htmlFor="heightTemplate">Alto </label>
					<input type="number" name="" min={0} value={templateDimension.height} id="heightTemplate" onChange={changeTemplateDimensionHeight} />
					<label htmlFor="">Orientación</label>
					<div  className='orientations'>
						<button type='button' className={orientation=="vertical"?"orientation orientationSelected orientation-vertical":"orientation orientation-vertical"} onClick={()=>changeOrientation("vertical")}>Vertical</button>
						<button type='button' className={orientation=="horizontal"?"orientation orientationSelected orientation-horizontal":"orientation orientation-horizontal"} onClick={()=>changeOrientation("horizontal")}>Horizontal</button>
					</div>
					<label htmlFor="">Identificador de seguridad</label>
					<input type="radio" name="seguridad" value="CodBarra" onChange={() => setSeguridad("CodBarra")} />Código de Barra
					<input type="radio" name="seguridad" value="CodQR" onChange={() => setSeguridad("CodQR")} />Código QR
					<input type="radio" name="seguridad" value="Ninguno" onChange={() => setSeguridad("Ninguno")} />Ninguno
					<label htmlFor="">Cargar Fondo</label>
					<small>Si no carga fondo, se usara el color blanco por defecto</small>
					<input type="file" name="" onChange={uploadBackgroundTemplate} id="" />
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
							<p>a</p>
							{tipoSectorPlantilla == "academico" && (
								<>
									<input type="checkbox" name="" id="" />Nombres
									<input type="checkbox" name="" id="" />Apellidos
									<input type="checkbox" name="" id="" />Tipo de documento
									<input type="checkbox" name="" id="" />N° Documento
									<input type="checkbox" name="" id="" />Cargo
									<input type="checkbox" name="" id="" />Grado
									<input type="checkbox" name="" id="" />Curso
									<input type="checkbox" name="" id="" />Jornada
									<input type="checkbox" name="" id="" />Rh
								</>
							)}
							{tipoSectorPlantilla == "empresarial" && (
								<>
									<input type="checkbox" name="" id="" />Nombres
									<input type="checkbox" name="" id="" />Apellidos
									<input type="checkbox" name="" id="" />Tipo de documento
									<input type="checkbox" name="" id="" />N° Documento
									<input type="checkbox" name="" id="" />Cargo
									<input type="checkbox" name="" id="" />Rh
								</>
							)}
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
				<PreviewTemplate templateDimension={templateDimension} background={backgroundUrL} photoDimension={photoDimension} seguridad={seguridad} />
			</article>
		</section>
	);
}

FormTemplate.propTypes = {};

export default FormTemplate;