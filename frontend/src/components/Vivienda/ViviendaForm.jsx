import { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import '../../styles/Vivienda/ViviendaForm.css';

function ViviendaForm({ get_viviendas, get_personas, get_municipios }) {
    const [direccion_vivienda, set_direccion_vivienda] = useState("");
    const [estrato_vivienda, set_estrato_vivienda] = useState("");
    const [id_municipio, set_id_municipio] = useState("");
    const [id_persona, set_id_persona] = useState("");
    const navigate = useNavigate();

    const create_vivienda = async (e) => {
        e.preventDefault();

        const nueva_vivienda = {
            direccion_vivienda,
            estrato_vivienda,
            id_municipio,
            id_persona
        };

        console.log(nueva_vivienda);

        api
            .post("/api/viviendas/", nueva_vivienda)
            .then((res) => {
                if (res.status === 201) {
                    alert("Vivienda creada");
                } else {
                    alert("Error al crear la vivienda");
                }
                get_viviendas();
                set_direccion_vivienda("");
                set_estrato_vivienda("");
                set_id_municipio("");
                set_id_persona("");
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Error al crear la vivienda");
            });
    };

    return (
        <form onSubmit={create_vivienda} className='form-container-vivienda'>
            <h2 className='form-container-h2'>Crear una vivienda</h2>
            <div className='form-container-agr'>
                <label htmlFor="direccion_vivienda">Dirección</label>
                <input type="text" id="direccion_vivienda" value={direccion_vivienda} onChange={(e) => set_direccion_vivienda(e.target.value)} required />
            </div>
            <div className='form-container-agr'>
                <label htmlFor="estrato_vivienda">Estrato</label>
                <select id="estrato_vivienda" value={estrato_vivienda} onChange={(e) => set_estrato_vivienda(parseInt(e.target.value))} required>
                    <option value="">Seleccione el estrato</option>
                    <option value="1">Estrato 1</option>
                    <option value="2">Estrato 2</option>
                    <option value="3">Estrato 3</option>
                    <option value="4">Estrato 4</option>
                    <option value="5">Estrato 5</option>
                    <option value="6">Estrato 6</option>
                </select>
            </div>
            <div className='form-container-agr'>
                <label htmlFor="id_municipio">Municipio</label>
                <select id="id_municipio" value={id_municipio} onChange={(e) => set_id_municipio(e.target.value)} required>
                    <option value="">Seleccione un municipio</option>
                    {get_municipios.map((municipio) => (
                        <option key={municipio.id_municipio} value={municipio.id_municipio}>{municipio.nombre_municipio}</option>
                    ))}
                </select>
            </div>
            <div className='form-container-agr'>
                <label htmlFor="id_persona">Propietario(a)</label>
                <select id="id_persona" value={id_persona} onChange={(e) => set_id_persona(e.target.value)} required>
                    <option value="">Seleccione una persona</option>
                    {get_personas.map((persona) => (
                        <option key={persona.id_persona} value={persona.id_persona}>{persona.id_persona} {persona.nombre_1_persona} {persona.apellido_1_persona}</option>
                    ))}
                </select>
            </div>
            <button className='form-container-v-button' type="submit">Crear vivienda</button>
        </form>
    );
}

export default ViviendaForm;