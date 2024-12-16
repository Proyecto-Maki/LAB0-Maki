import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Mascotas.css";

function Mascotas() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <div className="mascotas-container">
                <div className="mascotas-title">
                    <h1>Mascotas</h1>
                </div>
                <div className="construction-message">
                    <p>Esta página está en construcción. ¡Vuelve pronto para más información!</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Mascotas;