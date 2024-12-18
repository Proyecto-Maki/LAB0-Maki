import { useState, useEffect } from "react";
import api from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MascotaForm from "../components/Mascota/MascotaForm";
import Mascota from "../components/Mascota/Mascota";
import "../styles/Mascota/Mascotas.css"; // Corrige la ruta del archivo CSS


function Mascotas() {
    const [mascotas, set_mascotas] = useState([]);
    const [viviendas, set_viviendas] = useState([]);    


    const get_mascotas = () => {
        api
            .get("/api/mascotas/")
            .then((res) => res.data)
            .then((data) => { set_mascotas(data), console.log("Mascotas", data) })
            .catch((err) => alert(err));
    };

    const get_viviendas = () => {
        api
            .get("/api/viviendas/")
            .then((res) => res.data)
            .then((data) => { set_viviendas(data), console.log("Viviendas", data) })
            .catch((err) => alert(err));
    }

    const delete_mascota = (id) => {
        api
            .delete(`/api/mascotas/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Mascota eliminada");
                } else {
                    alert("Error al eliminar la mascota");
                }
                get_mascotas();
            })
            .catch((err) => alert(err));
        
    }

    useEffect(() => {
        get_mascotas();
        get_viviendas();
    }, []);

    return (
        <div className="mascotas-container">
            <Header />
            <h1>Mascotas</h1>
            <MascotaForm get_mascotas={get_mascotas} get_viviendas={viviendas}/>
            <div className="mascotas">
                {mascotas.map((mascota) => (
                    <Mascota
                        key={mascota.id_mascota}
                        mascota={mascota}
                        get_mascotas={get_mascotas}
                        get_viviendas={viviendas}
                        deleteMascota={delete_mascota}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Mascotas;