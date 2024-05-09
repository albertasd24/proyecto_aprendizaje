import {jsPDF} from 'jspdf';
import './PDFDocument.css';

const PDFDocument = ({}) => {
	const generatePDF = () => {
        const doc = new jsPDF();
        doc.text('Hello world!', 10, 10);

        // Obtener los datos del documento en formato de bytes
        const pdfData = doc.output('arraybuffer');

        // Convertir los datos a un blob
        const pdfBlob = new Blob([pdfData], { type: 'application/pdf' });

        // Crear una URL para el blob
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Mostrar el PDF en un iframe
        const iframe = document.createElement('iframe');
        iframe.src = pdfUrl;
        iframe.width = '100%';
        iframe.height = '600px';
        document.body.appendChild(iframe);

        // Opcionalmente, puedes añadir un enlace de descarga
        const downloadLink = document.createElement('a');
        downloadLink.href = pdfUrl;
        downloadLink.download = 'documento.pdf';
        downloadLink.innerText = 'Descargar PDF';
        document.body.appendChild(downloadLink);
    };

    return (
        <div>
            <button onClick={generatePDF}>Generar PDF</button>
        </div>
    );
};

PDFDocument.propTypes = {};

export default PDFDocument;