import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Login.css"
import axios from 'axios';

export const Login = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    const data = { email, password };
  
    try {
      const response = await axios.post('https://ejemplo.com/api/login', data);
  
      console.log(response.data);
      // aquí puedes guardar la información de sesión del usuario en el estado global de tu aplicación
  
    } catch (error) {
      console.error(error);
    }
  
    event.target.email.value = "";
    event.target.password.value = "";
  };
  

  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className='emailDivLogin'>
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" />
          </div>
        </div>
        <div className="form-group">
          <div className="passwordDivLogin">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
          </div>
        </div>
        <button type="submit">Ingresar</button>
      </form>
      <p>¿Aun no tienes cuenta? <Link to="/signUp">Regístrate</Link></p>
    </div>
  );

}
