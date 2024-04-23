import { useState } from 'react'
import iconKetasoft from "./assets/iconKetasoft.svg"
import './App.css'

function App() {

  return (
    <>

      <main className="main">
        <section className='main-login'>
          <img className='main-icon' src={iconKetasoft} alt="Logo Ketasoft" />
          <h2 className='main-login--title'>Ingresar a la <span>Aplicativo</span></h2>
          <div className="image"></div>
          <article className="main-links">

            <a href="">Ingresar</a>
            <a href="">Instrucciones</a>
          </article>
        </section>
        <section className='main-consult'>
          <h2 className='main-consult--title'>Consultar <span>Carnet</span></h2>
          <div className="image"></div>
          <article className="main-links">
            <a href="">Consultar</a>
            <a href="">Instrucciones</a>
          </article>
        </section>
      </main>
      <footer className='footer'>
        <p>&copy; 2024 Desarrollado por <b>StivenCode</b> </p>
      </footer>
    </>
  )
}

export default App
