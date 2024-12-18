import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AboutUs() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1', padding: '20px', textAlign: 'justify' }}>
        <h2>Sobre nosotros</h2>
        <p>
          Somos un equipo de desarrolladores apasionados por la tecnología y la innovación. Nuestro objetivo es crear soluciones eficientes y efectivas que faciliten la vida de las personas a través del uso de aplicaciones web y bases de datos robustas.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div style={{ margin: '10px', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '250px' }}>
            <img src="https://via.placeholder.com/150" alt="Persona 1" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h3>Angel David Piñeros Sierra</h3>
            <p>Ingeniería de Sistemas y Computación</p>
            <p><a href="https://linkedin.com/in/persona1" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/persona1" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
          <div style={{ margin: '10px', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '250px' }}>
            <img src="https://via.placeholder.com/150" alt="Persona 2" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h3>Catalina Gómez Moreno</h3>
            <p>Ingeniería de Sistemas y Computación</p>
            <p><a href="https://linkedin.com/in/persona2" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/persona2" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
          <div style={{ margin: '10px', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '250px' }}>
            <img src="https://via.placeholder.com/150" alt="Persona 3" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h3>Ivana Alejandra Pedraza Hernández</h3>
            <p>Ingeniería de Sistemas y Computación</p>
            <p><a href="https://linkedin.com/in/persona3" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/persona3" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
          <div style={{ margin: '10px', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '250px' }}>
            <img src="https://via.placeholder.com/150" alt="Persona 4" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h3>Kelly Johana Solano Calderón</h3>
            <p>Ingeniería de Sistemas y Computación</p>
            <p><a href="https://linkedin.com/in/persona4" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/persona4" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
