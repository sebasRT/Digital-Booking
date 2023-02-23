import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Ingresar</button>
      </form>
      <p>No tienes una cuenta? <a href="#">Regístrate aquí</a></p>
    </div>
  );
}

export default App;