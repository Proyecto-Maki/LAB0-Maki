import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import person1 from '../img/SobreNosotros/FotoAngel.jpeg';
import person2 from '../img/SobreNosotros/FotoCatalina.jpeg';
import person3 from '../img/SobreNosotros/FotoIvana.jpeg';
import person4 from '../img/SobreNosotros/FotoKelly.jpeg';
function SobreNosotros() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1', padding: '20px', textAlign: 'justify' }}>
        <h2>Sobre nosotros</h2>
        <p>
          Somos un equipo de desarrolladores que nos apasiona la tecnología. Nuestro objetivo es crear soluciones a través del uso de aplicaciones web y bases de datos.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div style={{ margin: '10px', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '250px' }}>
            <img src={person1} alt="Angel David Piñeros Sierra" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h3>Angel David Piñeros Sierra</h3>
            <p>Ingeniería de Sistemas y Computación</p>
            <p><a href="https://www.linkedin.com/in/apineross/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/Locotin" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
          <div style={{ margin: '10px', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '250px' }}>
            <img src={person2} alt="Persona 2" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h3>Catalina Gómez Moreno</h3>
            <p>Ingeniería de Sistemas y Computación</p>
            <p><a href="https://www.linkedin.com/in/cat-gomez/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/CatGmz" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
          <div style={{ margin: '10px', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '250px' }}>
            <img src={person3} alt="Persona 3" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h3>Ivana Alejandra Pedraza Hernández</h3>
            <p>Ingeniería de Sistemas y Computación</p>
            <p><a href="https://www.linkedin.com/in/ivana-alejandra-pedraza-hernandez-a268011b3/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/IvanaPedraza" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
          <div style={{ margin: '10px', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '250px' }}>
            <img src={person4} alt="Persona 4" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h3>Kelly Johana Solano Calderón</h3>
            <p>Ingeniería de Sistemas y Computación</p>
            <p><a href="https://www.linkedin.com/in/kelly-solano/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/kellysolanomt" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SobreNosotros;
