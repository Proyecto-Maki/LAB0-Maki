import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  const navigate = useNavigate();

  const handlePersonasClick = () => {
    navigate('/personas');
  };

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <button onClick={handlePersonasClick}>Personas</button>
      {/* Otros elementos del componente Home */}
    </div>
  );
}

export default Home;