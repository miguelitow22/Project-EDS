import React, { createContext, useContext, useState, useEffect } from 'react';

// Creamos un contexto para la autenticación
const AuthContext = createContext();

// Proveedor del contexto de autenticación
// Este componente envolverá otros componentes que necesiten acceso a la autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado que almacena los datos del usuario autenticado

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    const token = localStorage.getItem('token'); // Obtenemos el token del almacenamiento local (localStorage)

    if (token) {
      try {
        // Si existe un token, lo decodificamos para obtener los datos del usuario
        // El token se decodifica separando sus partes (header, payload y signature)
        const decodedToken = JSON.parse(atob(token.split('.')[1])); 

        // Verificamos si el token ha expirado
        if (decodedToken.exp * 1000 < Date.now()) {
          // Si el token ha expirado, lo removemos y limpiamos el usuario
          localStorage.removeItem('token');
          setUser(null);
        } else {
          setUser(decodedToken); // Guardamos los datos del usuario en el estado
        }
      } catch (error) {
        // Si hay un error en el proceso de decodificación, manejamos el error limpiando el token
        console.error('Error decodificando el token:', error);
        localStorage.removeItem('token');
        setUser(null);
      }
    }
  }, []); // Este efecto se ejecuta solo una vez al montar el componente, por eso se pasa un arreglo vacío

  return (
    // Proveemos el contexto de autenticación a todos los componentes hijos
    // Los hijos pueden acceder al estado 'user' y a la función 'setUser'
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook para usar el contexto de autenticación
// Esto facilita acceder al contexto en otros componentes
export const useAuth = () => {
  return useContext(AuthContext);
};
