//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'

function Saludo(props: any) {
  return (
    <>
      <section id="center">
        
        <div>
          <p>Buenos {props.Tipo} {props.Nombre}</p>
          <p>
            <strong>Hace sueño</strong>
          </p>
        </div>
      </section>

    </>
  )
}

export default Saludo
