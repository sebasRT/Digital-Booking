  import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import '../styles/SignUp.css';
import axios from 'axios';
import { GlobalContext } from '../assets/global.context';
import { useContext } from 'react';

export const SignUp = () => {
  const {url} = useContext(GlobalContext)
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
        "nombre":firstName,
        "apellido":lastName,
        "email":email,
        "password":confirmPassword,
        "rol": {
          "nombre": "ROLE_USER"
        }
      };


      axios.post(`${url}usuarioCliente/register`,formData)
      .then(e=>{
        console.log(e);alert('Los datos se han enviado correctamente');
        setFormSubmitted(true)
      })
        .catch(e=>console.log(e))
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFormSubmitted(false)
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
<>
{
  formSubmitted? <Navigate to="/login"></Navigate> : (
    <div className="register-container">
    <h1>Crear cuenta</h1>
    <form onSubmit={handleSubmit}>
    <div className='nombres'>
    <div className="form-group">
    <div className='nombreDiv'>
    <label htmlFor="first-name" className="textTitulosInputs">Nombre</label>
    <input required="true" type="text" className ="nombre" id="first-name" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
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
    <input required="true" type="email" className="correo" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    </div>
    <div className="form-group">
    <div className='passwordDiv'>
    <label htmlFor="password" className="textTitulosInputs">Contraseña</label>
    <input required="true" type="password" className={password + ' password'} id="password" name="password" value={password} onChange={handlePasswordChange} />
  
  </div>
  </div>
  <div className="form-group">
  <div className='passwordDiv'>
  <label htmlFor="confirm-password" className="textTitulosInputs">Confirmar contraseña</label>
  <input type="password" className={passwordClass + ' confirmPassword'} id="confirm-password" name="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
  {formSubmitted && password !== confirmPassword && <span className="errorMessage">Las contraseñas no coinciden</span>}
  </div>
  </div>
  <div className='submitDiv'>
  <button type="submit" className='submit-button'>Crear cuenta</button>
  </div>
  </form>
  <p>¿Ya tienes una cuenta? <Link to="/login"> Logueate</Link></p>
  </div>
  

  )
}
</>
);
};

export default SignUp;