import { useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';
import './PDFDocument.css';



const PDFDocument = () => {
	const iframeRef = useRef(null);
	const PX = 1.3333333333333333;
	const CM = 28.346456692913385;
	const MM = 2.834645669291339;
	const carnet = {
		template: {
			width: 207,
			height: 321,
			unit: "px"
		},
		photo: {
			width: 84,
			height: 120,
			unit: "px",
			x: 52,
			y: 33
		},
		information: [
			{ x: 56, y: 205, nombre: 'documento', bold: true },
			{ x: 39, y: 228, nombre: 'tipoDocumento' },
			{ x: 64, y: 181, nombre: 'apellidos' },
			{ x: 60, y: 157, nombre: 'nombres' },
		]
	}
	const convertPxToCm = (px) => {
		return px / CM
	}
	const convertCmToPx = (px) => {
		return px * CM
	}
	useEffect(() => {
		generatePDF();
	}, []);

	const generatePDF = () => {

		const doc = new jsPDF({
			unit: carnet.template.unit, // Establecer unidades en píxeles
			format: [carnet.template.width, carnet.template.height], // Establecer el tamaño del documento

		})

		doc.setProperties({
			title: "Carnet 1106769976",
			author: "Albert Ospina"
		})

		const widthDocument = doc.internal.pageSize.getWidth();
		const heightDocument = doc.internal.pageSize.getHeight();
		const centerX = (widthDocument - 2.8) / 2;

		// Agregar imagen
		doc.addImage("./anime.jpg", 'JPEG', 0, 0, widthDocument, heightDocument);
		// doc.addImage("./kirito_.jpg", 'JPEG', centerX, convertPxToCm(17), 2.8, 3);
		doc.addImage("./kirito_.jpg", 'JPEG', carnet.photo.x, carnet.photo.y, carnet.photo.width, carnet.photo.height);

		// Establecer el texto centrado
		doc.setFontSize(20);
		const splitName = doc.splitTextToSize("Gonzalo Augusto Salgado", widthDocument - 20);

		doc.setTextColor(255, 255, 255)
		// Agregar texto centrado
		splitName.forEach((line, index) => {
			doc.text(line, 56, 205);
		});

		// Guardar o mostrar el documento
		const pdfDataUri = doc.output('dataurl');
		iframeRef.current.src = pdfDataUri;
	};

	return (
		<div>
			<iframe ref={iframeRef} title="PDF Preview" width="100%" height="600px"></iframe>
		</div>
	);
};

export default PDFDocument;
