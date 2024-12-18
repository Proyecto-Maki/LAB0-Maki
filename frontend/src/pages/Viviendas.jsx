import { useState, useEffect } from "react";
import api from "../api";
import Vivienda from "../components/Vivienda/Vivienda";
import ViviendaForm from "../components/Vivienda/ViviendaForm"
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Vivienda/Viviendas.css";

function Viviendas(){
    const [viviendas, set_viviendas] = useState([]);
    const [municipios, set_municipios] = useState([]);
    const [viviendas_por_municipio, set_viviendas_por_municipio] = useState([]);
    const [id_municipio, set_id_municipio] = useState("");
    const [personas, set_personas] = useState([]);
    const [id_persona, set_id_persona] = useState("");
    const [viviendas_por_persona, set_viviendas_por_persona] = useState([]);

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
            .then((data) => { set_municipios(data), console.log("Municipios 2", data) })
            .catch((err) => alert(err));
    };

    const get_viviendas_por_municipio = (id_municipio) => {
        api
            .get(`/api/viviendas/municipio/${id_municipio}`)
            .then((res) => res.data)
            .then((data) => { set_viviendas_por_municipio(data), console.log("Viviendas_por_municipio", id_municipio, data) })
            .catch((err) => alert(err));
    }

    const get_personas = () => {
        api
            .get("/api/personas/")
            .then((res) => res.data)
            .then((data) => { set_personas(data), console.log("Personas 2", data) })
            .catch((err) => alert(err));
    };

    const get_viviendas_por_persona = (id_persona) => {
        api
            .get(`/api/viviendas/persona/${id_persona}`)
            .then((res) => res.data)
            .then((data) => { set_viviendas_por_persona(data), console.log("Viviendas_por_persona", id_persona, data) })
            .catch((err) => alert(err));
    }

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
        // get_viviendas_por_municipio(id_municipio);
        // get_viviendas_por_persona(id_persona);
    }, []);

    return(
        <div className="viviendas">
            <Header />
            <div className="viviendas-container">
                <div className="viviendas-title">Viviendas</div>
                <div className="form-container-v">
                    <ViviendaForm 
                        get_viviendas={get_viviendas} 
                        get_personas={personas}
                        get_municipios={municipios}
                        

                    />
                </div>
            </div>
            <div className="viviendas-list">
                <div className="viviendas-list-title">Lista de Viviendas</div>
                    <select onChange={(e) => get_viviendas_por_municipio(e.target.value)}>
                        <option value="">Seleccione un municipio</option>
                        {municipios.map((municipio) => (
                            <option value={municipio.id}>{municipio.nombre}</option>
                        ))}
                        
                    </select>
                    {
                        viviendas_por_municipio.map((vivienda) => (
                            <Vivienda
                                key={vivienda.id}
                                vivienda={vivienda}
                                get_viviendas={get_viviendas}
                                get_personas = {get_personas}
                                get_municipios = {municipios}
                                deleteVivienda={delete_vivienda}
                            />
                        ))
                    }
                </div>
        </div>
    );


}

export default Viviendas;