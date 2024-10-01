import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import '../styles/Register.css';

// Componente para el registro de nuevos usuarios
function Register() {
  const [nombre, setNombre] = useState(''); // Estado para el nombre del usuario
  const [email, setEmail] = useState(''); // Estado para el correo electrónico
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [role, setRole] = useState(''); // Estado para el rol del usuario
  const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito
  const [errorMessage, setErrorMessage] = useState(''); // Estado para el mensaje de error
  const navigate = useNavigate(); // Inicializa useNavigate para redirecciones

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene la recarga de la página
    try {
      // Realiza la solicitud al backend para registrar al nuevo usuario
      const response = await api.post('/users/register', { nombre, email, password, role });
      console.log('User registered successfully:', response.data);
      setSuccessMessage('Registro exitoso!'); // Mensaje de éxito
      setErrorMessage(''); // Resetea el mensaje de error

      // Redirige a la página de inicio de sesión después de 2 segundos
      setTimeout(() => {
        navigate('/login'); // Cambia a la ruta de inicio de sesión
      }, 2000);
      
      // Reinicia los campos del formulario
      setNombre('');
      setEmail('');
      setPassword('');
      setRole('');
    } catch (error) {
      console.error('Error registering user:', error);
      // Mensaje de error específico o genérico si no hay detalles
      setErrorMessage(error.response?.data?.error || 'Error en el registro, intenta de nuevo.');
      setSuccessMessage(''); // Resetea el mensaje de éxito
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Campos del formulario para el registro */}
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} required />
          <button type="submit">Register</button>
        </form>
        {/* Mensajes de éxito o error */}
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
}

export default Register;
