import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/personas">Personas</Link></li>
          <li><Link to="/mascotas">Mascotas</Link></li>
          <li><Link to="/viviendas">Viviendas</Link></li>
          <li><Link to="/about">Sobre Maki</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
