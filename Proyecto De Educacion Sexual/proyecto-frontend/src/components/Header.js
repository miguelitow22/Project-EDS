import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

// Componente que renderiza el encabezado de la página
// Incluye el menú de navegación y el icono para el menú móvil
function Header({ user }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para controlar si el menú móvil está abierto

  // Función que alterna la visibilidad del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      {/* Título del sitio web */}
      <div className="logo">
        <h1>Educación Sin Fronteras</h1>
      </div>
      {/* Menú de navegación con enlaces */}
      <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/register">Registro</Link></li>
          <li><Link to="/login">Iniciar Sesión</Link></li>
          <li><Link to="/profile">Perfil</Link></li>
        </ul>
      </nav>
      {/* Icono de menú móvil (hamburguesa) */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
}

export default Header;
