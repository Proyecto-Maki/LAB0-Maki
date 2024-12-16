import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section contact">
                    <h2 className="footer-title">Contacto</h2>
                    <p>Email: makishopmanagement@gmail.com</p>
                    <p>Teléfono: +57 3103103108</p>
                </div>
                <div className="footer-section additional">
                    <h2 className="footer-title">Ingeniería de Software II</h2>
                    <p>Universidad Nacional de Colombia</p>
                    <p>© 2024 Maki - Todos los derechos reservados</p>
                </div>
            </div>
        
        </footer>
    );
};

export default Footer;
