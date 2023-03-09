import React, { useState } from 'react'
import "../styles/SignUp.css"
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setFormSubmitted(true);
    } else {
      const formData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      };
      console.table(formData);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFormSubmitted(false);

      fetch('./data.json')
        .then(response => response.json())
        .then(data => {
          const formDataList = data ? data : [];
          formDataList.push(formData);
          const formDataJSON = JSON.stringify(formDataList);
          return fetch('./data.json', {
            method: 'POST',
            body: formDataJSON,
            headers: {
              'Content-Type': 'application/json'
            }
          })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error saving form data');
          }
          console.log('Data saved successfully');
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const passwordClass = formSubmitted && password !== confirmPassword ? 'error' : '';

  return (
    <div className="register-container">
      <h1>Crear cuenta</h1>
      <form onSubmit={handleSubmit}>
        <div className='nombres'>
        <div className="form-group">
          <div className='nombreDiv'>
          <label htmlFor="first-name" className="textTitulosInputs">Nombre</label>
          <input type="text" className ="nombre" id="first-name" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <div className='apellidoDiv'>
          <label htmlFor="last-name" className="textTitulosInputs" >Apellido</label>
          <input type="text" className="apellido" id="last-name" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>
        </div>  
        <div className="form-group">
          <div className='emailDiv'>
          <label htmlFor="email" className="textTitulosInputs" >Correo electrónico</label>
          <input type="email" className="correo" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <div className='passwordDiv'>
          <label htmlFor="password" className="textTitulosInputs">Contraseña</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className={passwordClass} />
          </div>
        </div>
        <div className="form-group">
          <div className='passwordConfirmDiv'>
          <label htmlFor="confirm-password" className="textTitulosInputs" >Confirmar contraseña</label>
          <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} className={passwordClass} />
          </div>
          {formSubmitted && password !== confirmPassword && <p className="password-mismatch-message error">Las contraseñas no coinciden</p>}
        </div>
        <button type="submit" className="crearCuenta" >Crear cuenta</button>
      </form>
      {formSubmitted && password === confirmPassword && <p className="success-message"></p>}
      <p>¿Ya tienes una cuenta? <a href="./login.js">Iniciar sesión</a></p>
    </div>
  );

}
