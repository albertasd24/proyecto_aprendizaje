import iconKetasoft from "./assets/iconKetasoft.svg"
import './App.css'
import { Link } from "react-router-dom"

function App() {

  return (
    <>
      <main className="main">
        <section className='main-login'>
          <img className='main-icon' src={iconKetasoft} alt="Logo Ketasoft" />
          <div className="main-image-login"></div>
          <h2 className='main-login--title'>Ingresar a la <span>Aplicación</span></h2>
          <div className="image"></div>
          <article className="main-links">
            <Link to={"login"} >Ingresar</Link>
            <a href="">Instrucciones</a>
          </article>
        </section>
        <section className='main-consult'>
          <h2 className='main-consult--title'>Consultar <span>Carnet</span></h2>
          <div className="main-image-consult"></div>
          <div className="image"></div>
          <article className="main-links">
            <a href="">Consultar</a>
            <a href="">Instrucciones</a>
          </article>
        </section>
      </main>
      <footer className='footer'>
        <p>&copy; 2024 Desarrollado por <b>StivenCode</b> </p>
        <div className="footer-terms-contact">  
          <p><a href="">Terminos</a> y <a href="">Condiciones</a></p>
          <a href="">Contactar</a>
        </div>
      </footer>
    </>
  )
}

export default App
