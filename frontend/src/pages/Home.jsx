import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

function Home () {

    const navigate = useNavigate();

    const personas = () => {
        navigate('/personas');
    }

    return (
        <div>
        <h1>Home</h1>
        <div>
            <button onClick={personas}>Personas</button>
        </div>
        </div>
    );
}

export default Home
