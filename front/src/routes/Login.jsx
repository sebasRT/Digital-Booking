import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';
import { GlobalContext } from '../assets/global.context';
import { useState } from 'react';
import { useContext } from 'react';

export const Login = () => {

  const {url} = useContext(GlobalContext)
  const [logged,setLogged] = useState(false)
  const [errorActive, setErrorActive] = useState({active: "unactive", message:""})

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
    localStorage.setItem("lastname",e.data[2])
    localStorage.setItem("password", password)
    localStorage.setItem("jwt",e.data[8])
    localStorage.setItem("id",e.data[3])
    setLogged(true)
    window.location.href = '/';
    }).catch(e=>{

      switch (e.message) {
        case 'Network Error':
          setErrorActive({active: "active", message:"Error de conexión"})
          break;
        case 'Request failed with status code 401':
          setErrorActive ({active:"active", message:"Algunos parámetros no son correctos"})
        default:
          break;
      }
      setLogged(false)})
  
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
          <label htmlFor="email" >Correo electrónico</label>
          <input type="email" id="email" name="email" required="true"/>
        </div>
      </div>
      <div className="form-group">
        <div className="passwordDivLogin">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required="true"/>
        </div>
      </div>
      <div className={`errorContainer ${errorActive.active}`}>{`${errorActive.message}`}</div>

      <button type="submit" className='botReserva'>Ingresar</button>


    </form>
    <p>¿Aun no tienes cuenta? <Link to="/signUp">Regístrate</Link></p>
  </div>

    )}
    </>


  );
};
