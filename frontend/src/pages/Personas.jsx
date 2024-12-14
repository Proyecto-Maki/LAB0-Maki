import { useState, useEffect } from "react";
import api from "../api";
import Persona from "../components/Persona";


function Personas() {
    const [personas, set_personas] = useState([]);
    const [mayoresEdad, set_mayoresEdad] = useState([]);
    const [id_persona, set_id_persona] = useState("");
    const [nombre_1_persona, set_nombre_1_persona] = useState("");
    const [nombre_2_persona, set_nombre_2_persona] = useState("");
    const [apellido_1_persona, set_apellido_1_persona] = useState("");
    const [apellido_2_persona, set_apellido_2_persona] = useState("");
    const [fecha_nacimiento, set_fecha_nacimiento] = useState("");
    const [genero_persona, set_genero_persona] = useState("M");
    const [telefono_persona, set_telefono_persona] = useState("");
    const [correo_persona, set_correo_persona] = useState("");
    const [id_cabeza_familia, set_id_cabeza_familia] = useState("");

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

    const create_persona = (e) => {
        e.preventDefault();
        const nueva_persona = {
            id_persona: id_persona,
            nombre_1_persona: nombre_1_persona,
            nombre_2_persona: nombre_2_persona,
            apellido_1_persona: apellido_1_persona,
            apellido_2_persona: apellido_2_persona,
            fecha_nacimiento: fecha_nacimiento,
            genero_persona: genero_persona,
            telefono_persona: telefono_persona,
            correo_persona: correo_persona,
            id_cabeza_familia: id_cabeza_familia || null,
        };
        console.log(nueva_persona);

        api
            .post("/api/personas/", nueva_persona)
            .then((res) => {
                if (res.status === 201) {
                    alert("Persona creada");
                } else {
                    alert("Error al crear la persona");
                }
                get_personas();
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Error al crear la persona");
            });
    };

    useEffect(() => {
        get_personas();
        get_mayores_edad();
    }, [])

    return (
        <div>
            <h1>Personas</h1>
            <div>
                {personas.map((persona) =>
                    <Persona persona={persona} deletePersona={delete_persona} key={persona.id_persona} />
                )}
            </div>
            <div>
                <h2>Crear una persona</h2>
                <form onSubmit={create_persona}>
                    <label htmlFor="id_persona">ID</label>
                    <br />
                    <input type="text" id="id_persona" value={id_persona} onChange={(e) => set_id_persona(e.target.value)} />

                    <label htmlFor="nombre_1_persona">Primer Nombre</label>
                    <br />
                    <input type="text" id="nombre_1_persona" value={nombre_1_persona} onChange={(e) => set_nombre_1_persona(e.target.value)} />
                    <br />
                    <label htmlFor="nombre_2_persona">Segundo Nombre</label>
                    <br />
                    <input type="text" id="nombre_2_persona" value={nombre_2_persona} onChange={(e) => set_nombre_2_persona(e.target.value)} />
                    <br />
                    <label htmlFor="apellido_1_persona">Primer Apellido</label>
                    <br />
                    <input type="text" id="apellido_1_persona" value={apellido_1_persona} onChange={(e) => set_apellido_1_persona(e.target.value)} />
                    <br />
                    <label htmlFor="apellido_2_persona">Segundo Apellido</label>
                    <br />
                    <input type="text" id="apellido_2_persona" value={apellido_2_persona} onChange={(e) => set_apellido_2_persona(e.target.value)} />
                    <br />
                    <label htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
                    <br />
                    <input type="date" id="fecha_nacimiento" value={fecha_nacimiento} onChange={(e) => set_fecha_nacimiento(e.target.value)} />
                    <br />
                    <label htmlFor="genero_persona">Género</label>
                    <br />
                    <select id="genero_persona" value={genero_persona} onChange={(e) => set_genero_persona(e.target.value)}>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                    <br />
                    <label htmlFor="telefono_persona">Teléfono</label>
                    <br />
                    <input type="text" id="telefono_persona" value={telefono_persona} onChange={(e) => set_telefono_persona(e.target.value)} />
                    <br />
                    <label htmlFor="correo_persona">Correo</label>
                    <br />
                    <input type="email" id="correo_persona" value={correo_persona} onChange={(e) => set_correo_persona(e.target.value)} />
                    <br />
                    <label htmlFor="id_cabeza_familia">ID cabeza de familia</label>
                    <br />
                    <select id="id_cabeza_familia" value={id_cabeza_familia} onChange={(e) => set_id_cabeza_familia(e.target.value)}>
                        <option value="">Seleccione el cabeza de familia</option>
                        {mayoresEdad.map((persona) => (
                            <option key={persona.id_persona} value={persona.id_persona}>
                                {persona.id_persona} {persona.nombre_1_persona} {persona.apellido_1_persona}
                            </option>
                        ))}
                    </select>
                    <br />
                    <button type="submit">Crear persona</button>
                </form>
            </div>
        </div>
    );
}

export default Personas;
