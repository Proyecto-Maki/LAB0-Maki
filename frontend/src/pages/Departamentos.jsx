import { useState, useEffect } from "react";
import api from "../api";
import Departamento from "../components/Departamento/Departamento";
import DepartamentoForm from "../components/Departamento/DepartamentoForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Departamento/Departamentos.css";

function Departamentos() {
    const [departamentos, set_departamentos] = useState([]);
    const [regiones, set_regiones] = useState([]);
    const [departamentos_por_region, set_departamentos_por_region] = useState([]);
    const [id_region, set_id_region] = useState("");
    const [personas, set_personas] = useState([]);

    const get_departamentos = () => {
        api
            .get("/api/departamentos/")
            .then((res) => res.data)
            .then((data) => { set_departamentos(data), console.log("Departamentos", data) })
            .catch((err) => alert(err));
    }

    const get_regiones = () => {
        api
            .get("/api/regiones/")
            .then((res) => res.data)
            .then((data) => { set_regiones(data), console.log("Regiones", data) })
            .catch((err) => alert(err));
    }

    const get_departamentos_por_region = (id_region) => {
        api
            .get(`/api/departamentos/region/${id_region}`)
            .then((res) => res.data)
            .then((data) => { set_departamentos_por_region(data), console.log("Departamentos_por_region", id_region, data) })
            .catch((err) => alert(err));
    }

    const get_personas = () => {
        api
            .get("/api/personas/")
            .then((res) => res.data)
            .then((data) => { set_personas(data), console.log("Personas", data) })
            .catch((err) => alert(err));
    }

    const delete_departamento = (id) => {
        api 
            .delete(`/api/departamentos/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Departamento eliminado");
                } else {
                    alert("Error al eliminar el departamento");
                }
                get_departamentos();
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Error al eliminar el departamento");
            });
    }

    useEffect(() => {
        get_departamentos();
        get_regiones();
        get_personas();
    }, []);

    return (
        <div className="departamentos">
            <Header />
            <div className="departamentos-container">
                <div className="departamentos-title">
                    <h1>Departamentos</h1>
                </div>
                <div className="form-container-d">
                    <DepartamentoForm 
                        get_departamentos={get_departamentos}
                        get_regiones={regiones}
                    />
                </div>
            </div>
            <div className="departamentos-list">
                {
                    departamentos.map((departamento) => (
                        <Departamento
                            key={departamento.id_departamento}
                            departamento={departamento}
                            get_departamentos={get_departamentos}
                            deleteDepartamento={delete_departamento}
                            get_regiones={regiones} // Ensure get_regiones is passed correctly
                            get_personas={personas} // Pass get_personas to Departamento component
                        />
                    ))
                }
            </div>
            <Footer />
        </div>
    );
}

export default Departamentos;