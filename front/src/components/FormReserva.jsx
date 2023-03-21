import React from 'react'
import '../styles/FormReserva.css'
const FormReserva = () => {
  return (
    <div className="contenedor-form">
    <div className="formulario">
      <form className="form" >
        <div className="input-box">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder= "Nombre"
            disabled
          />
        </div>

        <div className="input-box">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            name="apellido"
            id="Apellido"
            placeholder="Apellido"
            disabled
          />
        </div>

        <div className="input-box">
          <label htmlFor="email">Correo electronico</label>
          <input
            className="box-email"
            type="email"
            name="email"
            id="email"
            disabled
            placeholder="Email"
          />
        </div>

        <div className="input-box">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            placeholder="ciudad"
            required
          />
        </div>
      </form>
    </div>
  </div>
  )
}

export default FormReserva
