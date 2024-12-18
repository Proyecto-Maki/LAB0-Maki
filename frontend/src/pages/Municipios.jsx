import { useState, useEffect } from "react";
import api from "../api";
import Municipio from "../components/Municipio/Municipio";
import MunicipioForm from "../components/Municipio/MunicipioForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Municipio/Municipios.css";

function Municipios(){
    const [municipios, set_municipios] = useState([]);
    const [departamentos, set_departamentos] = useState([]);
    const [municipios_por_departamento, set_municipios_por_departamento] = useState([]);
    const [id_departamento, set_id_departamento] = useState("");

    const get_municipios = () => {
        api
            .get("/api/municipios/")
            .then((res) => res.data)
            .then((data) => { set_municipios(data), console.log("Municipios", data) })
            .catch((err) => alert(err));
    }

    const get_departamentos = () => {
        api
            .get("/api/departamentos/")
            .then((res) => res.data)
            .then((data) => { set_departamentos(data), console.log("Departamentos", data) })
            .catch((err) => alert(err));
    }

    const get_municipios_por_departamento = (id_departamento) => {
        api
            .get(`/api/municipios/departamento/${id_departamento}`)
            .then((res) => res.data)
            .then((data) => { set_municipios_por_departamento(data), console.log("Municipios_por_departamento", id_departamento, data) })
            .catch((err) => alert(err));
    }

    const delete_municipio = (id) => {
        api 
            .delete(`/api/municipios/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Municipio eliminado");
                } else {
                    alert("Error al eliminar el municipio");
                }
                get_municipios();
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Error al eliminar el municipio");
            });
    }

    useEffect(() => {
        get_municipios();
        get_departamentos();
    }, []);

    return(
        <div className="municipios">
            <Header />
            <div className="municipios-container">
                <div className="municipios-title">
                    <h1>Municipios</h1>
                </div>
                <div className="form-container-m">
                    <MunicipioForm 
                        get_municipios={get_municipios}
                        get_departamentos={departamentos}
                    />
                </div>
            </div>
            <div className="municipios-list">
                <div className="municipios-list-title">Lista de municipios</div>
                {/* <select onChange={(e) => {set_id_departamento(e.target.value); get_municipios_por_departamento(e.target.value)}}>
                    <option value="">Seleccione un departamento</option>
                    {departamentos.map((departamento) => (
                        <option key={departamento.id} value={departamento.id}>{departamento.nombre}</option>
                    ))}
                </select> */}
                    {
                        municipios.map((municipio) => (
                            <Municipio
                                key={municipio.id}
                                municipio={municipio}
                                get_municipios={get_municipios}
                                deleteMunicipio={delete_municipio}
                            />
                        ))
                    }
            </div>
            <Footer />
        </div>
    );
}

export default Municipios;