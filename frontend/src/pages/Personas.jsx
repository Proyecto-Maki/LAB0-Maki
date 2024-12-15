import { useState, useEffect } from "react";
import api from "../api";
import Persona from "../components/Persona";
import PersonaForm from "../components/PersonaForm";
import "../styles/Personas.css";


function Personas() {
    const [personas, set_personas] = useState([]);
    const [mayoresEdad, set_mayoresEdad] = useState([]);
    // const [id_persona, set_id_persona] = useState("");
    // const [nombre_1_persona, set_nombre_1_persona] = useState("");
    // const [nombre_2_persona, set_nombre_2_persona] = useState("");
    // const [apellido_1_persona, set_apellido_1_persona] = useState("");
    // const [apellido_2_persona, set_apellido_2_persona] = useState("");
    // const [fecha_nacimiento, set_fecha_nacimiento] = useState("");
    // const [genero_persona, set_genero_persona] = useState("M");
    // const [telefono_persona, set_telefono_persona] = useState("");
    // const [correo_persona, set_correo_persona] = useState("");
    // const [id_cabeza_familia, set_id_cabeza_familia] = useState("");

    const get_personas = () => {
        api
            .get("/api/personas/")
            .then((res) => res.data)
            .then((data) => { set_personas(data), console.log("Personas", data) })
            .catch((err) => alert(err));
    };

    const get_mayores_edad = () => {
        api
            .get("/api/personas/mayores_edad/")
            .then((res) => res.data)
            .then((data) => { set_mayoresEdad(data), console.log("Mayores", data) })
            .catch((err) => alert(err));
    }

    const delete_persona = (id) => {
        api
            .delete(`/api/personas/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Persona eliminada");
                } else {
                    alert("Error al eliminar la persona");
                }
                get_personas();
            })
            .catch((err) => alert(err));
        
    }

    // const create_persona = (e) => {
    //     e.preventDefault();
    //     const nueva_persona = {
    //         id_persona: id_persona,
    //         nombre_1_persona: nombre_1_persona,
    //         nombre_2_persona: nombre_2_persona,
    //         apellido_1_persona: apellido_1_persona,
    //         apellido_2_persona: apellido_2_persona,
    //         fecha_nacimiento: fecha_nacimiento,
    //         genero_persona: genero_persona,
    //         telefono_persona: telefono_persona,
    //         correo_persona: correo_persona,
    //         id_cabeza_familia: id_cabeza_familia || null,
    //     };
    //     console.log(nueva_persona);

    //     api
    //         .post("/api/personas/", nueva_persona)
    //         .then((res) => {
    //             if (res.status === 201) {
    //                 alert("Persona creada");
    //             } else {
    //                 alert("Error al crear la persona");
    //             }
    //             get_personas();
    //         })
    //         .catch((err) => {
    //             console.log(err.response.data);
    //             alert("Error al crear la persona");
    //         });
    // };

    useEffect(() => {
        get_personas();
        get_mayores_edad();
    }, [])

    return (
        <div className="personas">
            <div className="personas-container">
                <div className="personas-title">
                    <h1>Personas</h1>
                </div>
                <div className = "form-container-p">
                    <PersonaForm get_personas={get_personas} get_mayores_edad={mayoresEdad} />
                </div>
            </div>
            
            <div className="personas-list">
                {personas.map((persona) =>
                    <Persona persona={persona} deletePersona={delete_persona} key={persona.id_persona} />
                )}
            </div> 
            
        </div>
    );
}

export default Personas;
