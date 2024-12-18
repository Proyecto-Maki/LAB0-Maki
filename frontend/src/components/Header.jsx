import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Logotipo Maki.png';
import '../styles/Header.css';

function Header() {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" /> {/* Usa la imagen PNG aquí */}
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/personas" className="nav-link">Personas</Link>
          <Link to="/mascotas" className="nav-link">Mascotas</Link>
          <Link to="/viviendas" className="nav-link">Viviendas</Link>
          <Link to="/departamentos" className="nav-link">Departamentos</Link>
          <Link to="/municipios" className="nav-link">Municipios</Link> {/* Nuevo enlace */}
          <Link to="/regiones" className="nav-link">Regiones</Link> {/* Nuevo enlace */}
          <Link to="/sobre-nosotros" className="nav-link">Sobre Nosotros</Link> {/* Nuevo enlace */}
          {/* Otros enlaces xd*/}
        </nav>
      </header>
    );
}

export default Header;
