import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const navigate = useNavigate();

  const handlePersonasClick = () => {
    navigate('/personas');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        <h1>Home</h1>
        <button onClick={handlePersonasClick}>Personas</button>
        {/* Otros elementos del componente Home */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;