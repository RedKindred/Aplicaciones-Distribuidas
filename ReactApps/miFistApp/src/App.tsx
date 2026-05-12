import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Saludo from './saludo.tsx'
import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        
        <div>
          {/* Nombre */}
          <h1>Kevin Juarez Rojo</h1>
          <p>
            Boleta: <strong>2021640284</strong>
          </p>
         { /* <Saludo/>  Notacion estricta*/ }
          <Saludo Nombre = 'Rojo' Tipo = 'dias'></Saludo>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
