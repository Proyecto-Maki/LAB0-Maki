import { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import '../../styles/Persona/PersonaForm.css';

function PersonaForm({ get_personas, get_mayores_edad, get_viviendas }) {
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
    const [id_vivienda, set_id_vivienda] = useState("");


    const navigate = useNavigate();

    const create_persona = async (e) => {
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
            id_cabeza_familia: id_cabeza_familia,
        };

        const vivienda = {
            id_vivienda: id_vivienda,
            id_persona: id_persona,
        }

        console.log(nueva_persona);
        //console.log(vivienda);

        api
            .post("/api/personas/", nueva_persona)
            .then((res) => {
                if (res.status === 201) {
                    alert("Persona creada");
                    
                } else {
                    alert("Error al crear la persona");
                }
                get_personas();
                set_id_persona("");
                set_nombre_1_persona("");
                set_nombre_2_persona("");
                set_apellido_1_persona("");
                set_apellido_2_persona("");
                set_fecha_nacimiento("");
                set_genero_persona("M");
                set_telefono_persona("");
                set_correo_persona("");
                set_id_cabeza_familia("");
                print(res);
                return res;
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Error al crear la persona");
            });

        // api
        //     .post("/api/persona/vivienda/", vivienda)
        //     .then((res) => {
        //         if (res.status === 201) {
        //             alert("Vivienda asignada");
        //         } else {
        //             alert("Error al asignar vivienda");
        //         }
        //         get_viviendas();
        //         set_id_vivienda("");
        //     })
        //     .catch(() => {
        //         console.log(err.response.data);
        //         alert("Error al asignar vivienda");
        //     });
    }

    const create_residencia = async (id_persona) => {

        const vivienda = {
            id_persona: id_persona,
            id_vivienda: id_vivienda,
        }

        console.log(vivienda);

        api
            .post("/api/residencia/", vivienda)
            .then((res) => {
                if (res.status === 201) {
                    alert("Vivienda asignada");
                } else {
                    alert("Error al asignar vivienda");
                }
                get_viviendas();
                set_id_vivienda("");
                
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Error al asignar vivienda");
            });
    }

    const create_complete = async (e) => {
        try {
            const personaResponse = await create_persona(e);
            if (personaResponse.status === 201) {
                const id_persona_nuevo = personaResponse.data.id_persona;
                console.log("ID de persona creada:", id_persona);
                await create_residencia(id_persona_nuevo);
                alert("Persona y residencia creadas correctamente");
            } else {
                alert("Error al crear persona");
            }
        } catch (error) {
            console.error("Error al crear persona o residencia:", error);
            alert("Error al crear persona o residencia");
        }
    }


    return (
        <form onSubmit={create_persona} className='form-container-persona'>
            <h2 className='form-container-h2'>Crear una Persona</h2>
            <div className='form-container-agr'>
                <label htmlFor="id_persona">ID</label>
                <input type="text" id="id_persona" value={id_persona} onChange={(e) => set_id_persona(e.target.value)} required/>
            </div>
            <div className='form-container-agr'>
                <label htmlFor="nombre_1_persona">Primer Nombre</label>
                <input type="text" id="nombre_1_persona" value={nombre_1_persona} onChange={(e) => set_nombre_1_persona(e.target.value)} required />
            </div>
            <div className='form-container-agr'>
                <label htmlFor="nombre_2_persona">Segundo Nombre</label>
                <input type="text" id="nombre_2_persona" value={nombre_2_persona} onChange={(e) => set_nombre_2_persona(e.target.value)} />
            </div>
            <div className='form-container-agr'>
                <label htmlFor="apellido_1_persona">Primer Apellido</label>
                <input type="text" id="apellido_1_persona" value={apellido_1_persona} onChange={(e) => set_apellido_1_persona(e.target.value)} required />
            </div>
            <div className='form-container-agr'>
                <label htmlFor="apellido_2_persona">Segundo Apellido</label>
                <input type="text" id="apellido_2_persona" value={apellido_2_persona} onChange={(e) => set_apellido_2_persona(e.target.value)} />
            </div>
            <div className='form-container-agr'>
                <label htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
                <input type="date" id="fecha_nacimiento" value={fecha_nacimiento} onChange={(e) => set_fecha_nacimiento(e.target.value)} required />
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
                    {Array.isArray(get_mayores_edad) && get_mayores_edad.map((persona) => (
                        <option key={persona.id_persona} value={persona.id_persona}>
                            {persona.id_persona} {persona.nombre_1_persona} {persona.apellido_1_persona}
                        </option>
                    ))}
                </select>
            </div>
            <div className='form-container-agr'>
                <label htmlFor="id_vivienda">ID Vivienda</label>
                <select id="id_vivienda" value={id_vivienda} onChange={(e) => set_id_vivienda(e.target.value)}>
                    <option value="">Seleccione la vivienda</option>
                    { get_viviendas.map((vivienda) => (
                        <option key={vivienda.id_vivienda} value={vivienda.id_vivienda}>
                            {vivienda.id_vivienda} {vivienda.direccion_vivienda} {vivienda.nombre_municipio} {vivienda.nombre_departamento}
                        </option>
                    ))}
                </select>
            </div>
            <button className='form-container-p-botton' type="submit">Crear persona</button>
        </form>
    );

}

export default PersonaForm;