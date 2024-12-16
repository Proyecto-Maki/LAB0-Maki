import { useState, useEffect } from "react";
import api from "../api";
import "../styles/ModalEditarPersona.css";

function PersonaFormEdit({ isEditarOpen, cerrarEditar, persona, get_personas, mayoresEdad }) {

    const [id_persona, set_id_persona] = useState(persona.id_persona);
    const [nombre_1_persona, set_nombre_1_persona] = useState(persona.nombre_1_persona);
    const [nombre_2_persona, set_nombre_2_persona] = useState(persona.nombre_2_persona);
    const [apellido_1_persona, set_apellido_1_persona] = useState(persona.apellido_1_persona);
    const [apellido_2_persona, set_apellido_2_persona] = useState(persona.apellido_2_persona);
    const [fecha_nacimiento, set_fecha_nacimiento] = useState(persona.fecha_nacimiento);
    const [genero_persona, set_genero_persona] = useState(persona.genero_persona);
    const [telefono_persona, set_telefono_persona] = useState(persona.telefono_persona);
    const [correo_persona, set_correo_persona] = useState(persona.correo_persona);
    const [id_cabeza_familia, set_id_cabeza_familia] = useState(persona.id_cabeza_familia);

    const editarPersona = async (e) => {
        e.preventDefault();

        const updated_persona = {
            id_persona,
            nombre_1_persona,
            nombre_2_persona,
            apellido_1_persona,
            apellido_2_persona,
            fecha_nacimiento,
            genero_persona,
            telefono_persona,
            correo_persona,
            id_cabeza_familia: id_cabeza_familia || null,
        };

        console.log(updated_persona);

        try {
            const res = await api.put(`/api/personas/update/${id_persona}/`, updated_persona);
            if (res.status === 200) {
                alert("Persona actualizada");
                cerrarEditar(); // Cierra el modal
            } else {
                alert("Error al actualizar la persona");
            }
        } catch (err) {
            console.log(err.response.data);
            alert("Error al actualizar la persona");
        }
    }


    return (
        <div className="modal-editar-persona">
            <div className="modal-editar-persona-content">
                <span className="close" onClick={cerrarEditar}>&times;</span>
                <form onSubmit={editarPersona} className='form-container-persona'>
                    <h2 className='form-container-h2'>Editar Persona</h2>
                    <div className='form-container-agr'>
                        <label htmlFor="id_persona">ID</label>
                        <input type="text" id="id_persona" value={id_persona} onChange={(e) => set_id_persona(e.target.value)} disabled />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="nombre_1_persona">Primer Nombre</label>
                        <input type="text" id="nombre_1_persona" value={nombre_1_persona} onChange={(e) => set_nombre_1_persona(e.target.value)} required/>
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="nombre_2_persona">Segundo Nombre</label>
                        <input type="text" id="nombre_2_persona" value={nombre_2_persona} onChange={(e) => set_nombre_2_persona(e.target.value)} />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="apellido_1_persona">Primer Apellido</label>
                        <input type="text" id="apellido_1_persona" value={apellido_1_persona} onChange={(e) => set_apellido_1_persona(e.target.value)} required/>
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="apellido_2_persona">Segundo Apellido</label>
                        <input type="text" id="apellido_2_persona" value={apellido_2_persona} onChange={(e) => set_apellido_2_persona(e.target.value)} />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
                        <input type="date" id="fecha_nacimiento" value={fecha_nacimiento} onChange={(e) => set_fecha_nacimiento(e.target.value)} required/>
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="genero_persona">Género</label>
                        <select id="genero_persona" value={genero_persona} onChange={(e) => set_genero_persona(e.target.value)} required>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                            <option value="O">Otro</option>
                        </select>
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="telefono_persona">Teléfono</label>
                        <input type="text" id="telefono_persona" value={telefono_persona} onChange={(e) => set_telefono_persona(e.target.value)} />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="correo_persona">Correo</label>
                        <input type="email" id="correo_persona" value={correo_persona} onChange={(e) => set_correo_persona(e.target.value)} />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="id_cabeza_familia">ID cabeza de familia</label>
                        <select id="id_cabeza_familia" value={id_cabeza_familia} onChange={(e) => set_id_cabeza_familia(e.target.value)}>
                            <option value="">Seleccione el cabeza de familia</option>
                            {Array.isArray(mayoresEdad) && mayoresEdad.map((persona) => (
                                <option key={persona.id_persona} value={persona.id_persona}>
                                    {persona.id_persona} {persona.nombre_1_persona} {persona.apellido_1_persona}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Actualizar persona</button>
                </form>
            </div>
        </div>
    );

}

export default PersonaFormEdit;