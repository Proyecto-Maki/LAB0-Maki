import { useState, useEffect } from "react";
import api from "../../api";
import "../../styles/Persona/ModalEditarVivienda.css";

function ViviendaFormEdit({isEditarOpen, cerrarEditar, vivienda, get_viviendas, get_personas, get_municipios}){
    const [id_vivienda, set_id_vivienda] = useState(vivienda.id_vivienda);
    const [direccion_vivienda, set_direccion_vivienda] = useState(vivienda.direccion_vivienda);
    const [estrato_vivienda, set_estrato_vivienda] = useState(vivienda.estrato_vivienda);
    const [id_municipio, set_id_municipio] = useState(vivienda.id_municipio);
    const [id_persona, set_id_persona] = useState(vivienda.id_persona);

    const editarVivienda = async (e) => {
        e.preventDefault();

        const updated_vivienda = {
            id_vivienda,
            direccion_vivienda,
            estrato_vivienda,
            id_municipio,
            id_persona
        };

        console.log(updated_vivienda);

        try {
            const res = await api.put(`/api/viviendas/update/${id_vivienda}/`, updated_vivienda);
            if (res.status === 200) {
                alert("Vivienda actualizada");
                cerrarEditar(); // Cierra el modal
            } else {
                alert("Error al actualizar la vivienda");
            }
        } catch (err) {
            console.log(err.response.data);
            alert("Error al actualizar la vivienda");
        }
    }

    return(
        <div className="modal-editar-vivienda">
            <div className="modal-editar-vivienda-content">
                <span className="close" onClick={cerrarEditar}>&times;</span>
                <form onSubmit={editarVivienda} className='form-container-vivienda'>
                    <h2 className='form-container-h2'>Editar Vivienda</h2>
                    <div className='form-container-agr'>
                        <label htmlFor="id_vivienda">ID</label>
                        <input type="text" id="id_vivienda" value={id_vivienda} onChange={(e) => set_id_vivienda(e.target.value)} disabled />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="direccion_vivienda">Dirección</label>
                        <input type="text" id="direccion_vivienda" value={direccion_vivienda} onChange={(e) => set_direccion_vivienda(e.target.value)} disabled/>
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="estrato_vivienda">Estrato</label>
                        <input type="text" id="estrato_vivienda" value={estrato_vivienda} onChange={(e) => set_estrato_vivienda(e.target.value)} />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="id_municipio">Municipio</label>
                        <input type="text" id="id_municipio" value={id_municipio} onChange={(e) => set_id_municipio(e.target.value)} disabled/>
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="id_persona">Propietario(a)</label>
                        <select id="id_persona" value={id_persona} onChange={(e) => set_id_persona(e.target.value)} required>
                            <option value="">Seleccione una opción</option>
                            {
                                get_personas.map((persona) => (
                                    <option key={persona.id_persona} value={persona.id_persona}>{persona.id_persona} {persona.nombre_1_persona} {persona.apellido_1_persona}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button type="submit" className='form-container-button'>Actualizar persona</button>
                </form>
            </div>
        </div>
    );
}

export default ViviendaFormEdit;