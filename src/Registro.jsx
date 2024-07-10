import { useEffect, useState } from 'react'
import './App.css'

function Registro({ recargarAhora }) {
  const [usuarioRegistro, setUsuarioRegistro] = useState('')
  const [claveRegistro, setClaveRegistro] = useState('')

  function cambiarUsuarioRegistro(evento) {
    setUsuarioRegistro(evento.target.value)
  }

  function cambiarClaveRegistro(evento) {
    setClaveRegistro(evento.target.value)
  }

  async function registrar() {
    const peticion = await fetch(import.meta.env.VITE_HOSTBACKEND+'/registro?usuario=' + usuarioRegistro + '&clave=' + claveRegistro, { credentials: 'include' })
    if (peticion.ok) {
      alert("usuario registrado")
      recargarAhora()
    } else {
      alert('usuario no registrado')
    }
  }

  useEffect(() => {
  }, [])

  return (
    <>
      <h1>Registro</h1>
      <input placeholder='Usuario' type="text" name="usuario" id="usuario" value=
        {usuarioRegistro} onChange={cambiarUsuarioRegistro} />
      <input placeholder='Clave' type="password" name="clave" id="clave" value=
        {claveRegistro} onChange={cambiarClaveRegistro} />
      <button onClick={registrar}>Registrar </button>
    </>
  )
}
export default Registro
