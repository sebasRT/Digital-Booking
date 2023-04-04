import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';
import { GlobalContext } from '../assets/global.context';
import { useState } from 'react';
import { useContext } from 'react';

export const Login = () => {

  const {url} = useContext(GlobalContext)
  const [logged,setLogged] = useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    const data = { 
      email: email
      , password: password };

    axios.post(`${url}login`,data).then(e=>{
    localStorage.setItem("email",email)
    localStorage.setItem("name", e.data[1])
    localStorage.setItem("password", password)
    localStorage.setItem("jwt",e.data[2])
    setLogged(true)
    window.location.href = '/';
    }).catch(e=>{console.log(e);setLogged(false)})
  
    // // Obtener los datos guardados en localStorage
    // const storedData = JSON.parse(localStorage.getItem('formData'));
  
    // if (storedData && email === storedData.email && password === storedData.password) {
    //   // Si los datos coinciden, redireccionar al usuario a la página de inicio
    //  
    // } else {
    //   // Si los datos no coinciden o no hay datos guardados, mostrar mensaje de error
    //   alert('Correo electrónico o contraseña incorrectos');
    // }
  
    event.target.email.value = '';
    event.target.password.value = '';
  };
  

  return (

    <>
    {logged? <Navigate to= "/"></Navigate> : (
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


      <button type="submit" className='botReserva'>Ingresar</button>


    </form>
    <p>¿Aun no tienes cuenta? <Link to="/signUp">Regístrate</Link></p>
  </div>

    )}
    </>


  );
};
