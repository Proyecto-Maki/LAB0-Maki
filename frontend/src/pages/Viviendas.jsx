import { useState, useEffect } from "react";
import api from "../api";
import Vivienda from "../components/Vivienda/Vivienda";
import ViviendaForm from "../components/Vivienda/ViviendaForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Vivienda/Viviendas.css";

function Viviendas() {
    const [viviendas, set_viviendas] = useState([]);
    const [municipios, set_municipios] = useState([]);
    const [personas, set_personas] = useState([]);

    const get_viviendas = () => {
        api
            .get("/api/viviendas/")
            .then((res) => res.data)
            .then((data) => { set_viviendas(data), console.log("Viviendas", data) })
            .catch((err) => alert(err));
    }

    const get_municipios = () => {
        api
            .get("/api/municipios/")
            .then((res) => res.data)
            .then((data) => { set_municipios(data), console.log("Municipios", data) })
            .catch((err) => alert(err));
    };

    const get_personas = () => {
        api
            .get("/api/personas/")
            .then((res) => res.data)
            .then((data) => { set_personas(data), console.log("Personas", data) })
            .catch((err) => alert(err));
    };

    const delete_vivienda = (id) => {
        api 
            .delete(`/api/viviendas/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Vivienda eliminada");
                } else {
                    alert("Error al eliminar la vivienda");
                }
                get_viviendas();
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Error al eliminar la vivienda");
            });
    }

    useEffect(() => {
        get_viviendas();
        get_municipios();
        get_personas();
    }, []);

    return (
        <div className="viviendas">
            <Header />
            <div className="viviendas-container">
                <div className="viviendas-title">
                    <h1>Viviendas</h1>
                </div>
                <div className="form-container-v">
                    <ViviendaForm 
                        get_viviendas={get_viviendas} 
                        get_personas={personas}
                        get_municipios={municipios}
                    />
                </div>
            </div>
            <div className="viviendas-list">
                {
                    viviendas.map((vivienda) => (
                        <Vivienda
                            key={vivienda.id_vivienda}
                            vivienda={vivienda}
                            get_viviendas={get_viviendas}
                            get_personas={personas}
                            get_municipios={municipios}
                            deleteVivienda={delete_vivienda}
                        />
                    ))
                }
            </div>
            <Footer />
        </div>
    );
}

export default Viviendas;