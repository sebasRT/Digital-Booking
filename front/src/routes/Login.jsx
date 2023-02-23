import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Login.css"
export const Login = () => {
  return (
    <div className="login-container route">
      <h1>Iniciar sesión</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label><br />
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label><br />
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className='submitButton'>Ingresar</button>
      </form>
      <p>No tienes una cuenta? <Link to={"/signUp"}>Regístrate aquí</Link></p>
    </div>
  );

}
