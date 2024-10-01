import React, { useState, useEffect } from 'react';
import api from '../utils/api'; // Servicio de API para interactuar con el backend
import { useNavigate } from 'react-router-dom'; 
import '../styles/Profile.css';

// Componente de perfil de usuario
function Profile() {
  const [user, setUser] = useState(null); // Estado que almacena los datos del usuario
  const [formData, setFormData] = useState({ nombre: '', email: '', password: '', role: '' });
  const [message, setMessage] = useState(''); // Estado para mostrar mensajes de éxito o error
  const navigate = useNavigate(); // Hook para redirigir entre rutas

  // useEffect para cargar los datos del perfil del usuario al montar el componente
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/users/profile'); // Obtenemos el perfil del usuario
        setUser(response.data.user); // Guardamos los datos del usuario
        setFormData({
          nombre: response.data.user.nombre,
          email: response.data.user.email,
          password: '',
          role: response.data.user.role,
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
        setMessage('Failed to load profile'); // Mensaje de error si no se puede cargar el perfil
      }
    };

    fetchProfile();
  }, []);

  // Función para manejar cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para actualizar el perfil del usuario
  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevenimos la recarga de la página
    try {
      await api.put('/users/profile', formData); // Actualizamos el perfil en el backend
      setMessage('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Failed to update profile'); // Mostramos un mensaje de error si falla
    }
  };

  // Función para desactivar la cuenta del usuario
  const handleDeactivate = async () => {
    try {
      await api.delete('/users/profile'); // Desactivamos el perfil en el backend
      setMessage('Profile deactivated successfully!');
      setUser(null); // Limpiamos el estado del usuario
    } catch (error) {
      console.error('Error deactivating profile:', error);
      setMessage('Failed to deactivate profile'); // Mensaje de error si falla
    }
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminamos el token de localStorage
    navigate('/login'); // Redirigimos a la página de inicio de sesión
  };

  // Mientras se carga el perfil, mostramos un mensaje
  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <div className="profile-form">
        <h1>Profile</h1>
        {/* Formulario para actualizar el perfil */}
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
            required
          />
          <button type="submit">Update</button>
        </form>

        {/* Botón para desactivar la cuenta */}
        <button onClick={handleDeactivate} style={{ marginTop: '20px' }}>
          Deactivate Account
        </button>

        {/* Botón para cerrar sesión */}
        <button onClick={handleLogout} style={{ marginTop: '20px' }}>
          Logout
        </button>

        {/* Mensaje de éxito o error */}
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}

export default Profile;
