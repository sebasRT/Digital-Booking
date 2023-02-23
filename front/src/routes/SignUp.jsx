import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
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
      const formDataJSON = JSON.stringify(formData);
      console.log(formDataJSON);
  
      try {
        const response = await fetch('data.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: formDataJSON
        });
  
        if (response.ok) {
          console.log('Data saved successfully');
        } else {
          console.log('Failed to save data');
        }
      } catch (error) {
        console.log('Error:', error);
      }
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
    <div className="register-container route">
      <h1>Crear una cuenta</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first-name">Nombre</label>
          <input type="text" id="first-name" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Apellido</label>
          <input type="text" id="last-name" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className={passwordClass} />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirmar contraseña</label>
          <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} className={passwordClass} />
          {formSubmitted && password !== confirmPassword && <p className="password-mismatch-message error">Las contraseñas no coinciden</p>}
        </div>
        <button type="submit" className='submitButton'>Crear cuenta</button>
      </form>
      {formSubmitted && password === confirmPassword && <p className="success-message">Cuenta creada con éxito</p>}
      <p>¿Ya tienes una cuenta? <Link to={"/Login"}>Inicia sesión aquí</Link></p>
    </div>
  );

}
