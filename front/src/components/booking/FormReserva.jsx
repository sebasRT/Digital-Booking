import React from 'react'
import '../../styles/FormReserva.css'
const FormReserva = ({form}) => {

  const setForm =(e)=>{
    switch (e.target.name) {
      case "nombre":
        form(e.target.name,e.target.value)
        break;
      case "apellido":
        form(e.target.name,e.target.value)
        break;
      case "email":
        form(e.target.name,e.target.value)
        break;
      case "ciudad":
        form(e.target.name,e.target.value)
        break;
    
      default:
        break;
    }
  }


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
            placeholder= "Digital"
            required
            onChange={setForm}
          />
        </div>

        <div className="input-box">
          <label htmlFor="apellido">Apellido</label>
          <br />
          <input
            type="text"
            name="apellido"
            id="apellido"
            placeholder="House"
            required
            onChange={setForm}
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
            placeholder="team11@dh.co"
            required
            onChange={setForm}
          />
        </div>

        <div className="input-box">
          <label htmlFor="ciudad">Ciudad</label>
           <br />
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            placeholder="Ciudad"
            onChange={setForm}
            required
          />
        </div>
      </form>
    </div>
  
  )
}

export default FormReserva
