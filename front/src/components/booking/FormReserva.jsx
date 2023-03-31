import React from 'react'
import '../../styles/FormReserva.css'
const FormReserva = () => {
  return (


    
    <div className="formulario">
      <form className="form" >
        <div className="input-box">
          <label htmlFor="nombre">Nombre</label>
          <br />
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder= "paula"
            disabled
          />
        </div>

        <div className="input-box">
          <label htmlFor="apellido">Apellido</label>
          <br />
          <input
            type="text"
            name="apellido"
            id="Apellido"
            placeholder="castillo"
            disabled
          />
        </div>

        <div className="input-box">
          <label htmlFor="email">Correo electronico</label>
          <br />
          <input
            className="box-email"
            type="email"
            name="email"
            id="email"
            disabled
            placeholder="paulacas2204@gmail.com"
          />
        </div>

        <div className="input-box">
          <label htmlFor="ciudad">Ciudad</label>
           <br />
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
  
  )
}

export default FormReserva
