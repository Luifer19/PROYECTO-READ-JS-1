import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './conversor'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado, setLogueado] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)

  }
  function cambiarClave(evento) {
    setClave(evento.target.value)

  }
  function ingrsar() {
    if (usuario == 'admin' && clave == 'admin') {
      alert('ingresaste')
      setLogueado(true)
    } else {
      alert('usuario o clave incorrectos ')
    }
  }
  if (logueado) {
    return <Conversor />
  }
  return (
    <>
      <h1>Inicio de sesión </h1>
      <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
      <input placeholder='Clave' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
      <button onClick={ingrsar}>Ingresar </button>
    </>
  )
}


export default App
