import { useState } from 'react';
import api from '../../api';
import '../../styles/Vivienda/ModalEditarVivienda.css';

function ViviendaFormEdit({ isEditarOpen, cerrarEditar, vivienda, get_viviendas, get_personas, get_municipios }) {
    const [direccion_vivienda, set_direccion_vivienda] = useState(vivienda.direccion_vivienda);
    const [estrato_vivienda, set_estrato_vivienda] = useState(vivienda.estrato_vivienda);
    const [id_municipio, set_id_municipio] = useState(vivienda.id_municipio);
    const [id_persona, set_id_persona] = useState(vivienda.id_persona);

    const editarVivienda = async (e) => {
        e.preventDefault();

        const updated_vivienda = {
            direccion_vivienda,
            estrato_vivienda,
            id_municipio,
            id_persona,
        };

        console.log(updated_vivienda);

        try {
            const res = await api.put(`/api/viviendas/update/${vivienda.id_vivienda}/`, updated_vivienda);
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

    return (
        isEditarOpen && (
            <div className="modal-editar-vivienda">
                <div className="modal-editar-vivienda-content">
                    <span className="close" onClick={cerrarEditar}>&times;</span>
                    <form onSubmit={editarVivienda}>
                        <h2 className='form-container-h2'>Editar Vivienda</h2>
                        <div className='form-container-agr'>
                            <label htmlFor="direccion_vivienda">Dirección</label>
                            <input type="text" id="direccion_vivienda" value={direccion_vivienda} onChange={(e) => set_direccion_vivienda(e.target.value)} required />
                        </div>
                        <div className='form-container-agr'>
                            <label htmlFor="estrato_vivienda">Estrato</label>
                            <input type="text" id="estrato_vivienda" value={estrato_vivienda} onChange={(e) => set_estrato_vivienda(e.target.value)} required />
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
                                    <option key={persona.id_persona} value={persona.id_persona}>{persona.nombre_1_persona} {persona.apellido_1_persona}</option>
                                ))}
                            </select>
                        </div>
                        <button className="modal-botton" type="submit">Actualizar vivienda</button>
                    </form>
                </div>
            </div>
        )
    );
}

export default ViviendaFormEdit;