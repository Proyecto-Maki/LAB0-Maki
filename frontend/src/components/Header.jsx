import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import '../styles/Header.css';

function Header() {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" /> {/* Usa la imagen SVG aquí */}
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/personas" className="nav-link">Personas</Link>
          <Link to="/mascotas" className="nav-link">Mascotas</Link>
          <Link to="/viviendas" className="nav-link">Viviendas</Link> {/* Nuevo enlace */}
          <Link to="/departamentos" className="nav-link">Departamentos</Link> {/* Nuevo enlace */}
          {/* Otros enlaces */}
        </nav>
      </header>
    );
  }

export default Header;
