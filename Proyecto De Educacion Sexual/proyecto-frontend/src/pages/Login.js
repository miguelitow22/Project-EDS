import React, { useState } from 'react';
import api from '../utils/api'; // Importamos el servicio de API
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

// Componente para el formulario de inicio de sesión
function Login() {
  const [email, setEmail] = useState(''); // Estado para el correo electrónico
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [loginMessage, setLoginMessage] = useState(''); // Estado para mostrar mensajes (éxito o error)
  const navigate = useNavigate();

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenimos la recarga de la página
    setLoginMessage(''); // Limpiamos mensajes anteriores
    
    try {
      // Realizamos la solicitud al backend para autenticar al usuario
      const response = await api.post('/users/login', { email, password });
      localStorage.setItem('token', response.data.token); // Guardamos el token en localStorage
      setLoginMessage('Login successful!'); // Mensaje de éxito
      navigate('/'); // Redirigimos a la página de inicio
      
    } catch (error) {
      console.error('Error logging in:', error);

      // Manejo de errores mejorado: mostramos un mensaje de error específico o genérico
      const errorMsg = error.response?.data?.error || 'Invalid credentials, please try again.';
      setLoginMessage(errorMsg);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Input para el correo electrónico */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          {/* Input para la contraseña */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        
        {/* Mensaje de éxito o error */}
        {loginMessage && <p>{loginMessage}</p>}
      </div>
    </div>
  );
}

export default Login;
