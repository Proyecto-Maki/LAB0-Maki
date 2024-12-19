import { useState } from 'react';
import api from '../../api';
import '../../styles/Municipio/ModalEditarMunicipio.css';

function MunicipioFormEdit({ isEditarOpen, cerrarEditar, municipio, get_municipios, get_departamentos, get_personas }) {
    const [nombre_municipio, set_nombre_municipio] = useState(municipio.nombre_municipio);
    const [id_departamento, set_id_departamento] = useState(municipio.id_departamento);
    const [id_alcalde, set_id_alcalde] = useState(municipio.id_alcalde); // New state for id_alcalde

    const editarMunicipio = async (e) => {
        e.preventDefault();

        const updated_municipio = {
            nombre_municipio,
            id_departamento,
            id_alcalde, // Include id_alcalde in the updated data
        };

        console.log(updated_municipio);

        try {
            const res = await api.put(`/api/municipios/update/${municipio.id_municipio}/`, updated_municipio);
            if (res.status === 200) {
                alert("Municipio actualizado");
                cerrarEditar(); // Cierra el modal
            } else {
                alert("Error al actualizar el municipio");
            }
        } catch (err) {
            console.log(err.response.data);
            alert("Error al actualizar el municipio");
        }
    }

    return (
        isEditarOpen && (
            <div className="modal-editar-municipio">
                <div className="modal-editar-municipio-content">
                    <span className="close" onClick={cerrarEditar}>&times;</span>
                    <form onSubmit={editarMunicipio}>
                        <h2 className='form-container-h2'>Editar Municipio</h2>
                        <div className='form-container-agr'>
                            <label htmlFor="nombre_municipio">Nombre</label>
                            <input type="text" id="nombre_municipio" value={nombre_municipio} onChange={(e) => set_nombre_municipio(e.target.value)} required />
                        </div>
                        <div className='form-container-agr'>
                            <label htmlFor="id_departamento">Departamento</label>
                            <select id="id_departamento" value={id_departamento} onChange={(e) => set_id_departamento(e.target.value)} required>
                                <option value="">Seleccione un departamento</option>
                                {get_departamentos.map((departamento) => (
                                    <option key={departamento.id_departamento} value={departamento.id_departamento}>{departamento.nombre_departamento}</option>
                                ))}
                            </select>
                        </div>
                        <div className='form-container-agr'>
                            <label htmlFor="id_alcalde">Alcalde</label>
                            <select id="id_alcalde" value={id_alcalde} onChange={(e) => set_id_alcalde(e.target.value)} required>
                                <option value="">Seleccione un alcalde</option>
                                {get_personas.map((persona) => (
                                    <option key={persona.id_persona} value={persona.id_persona}>{persona.nombre_1_persona} {persona.apellido_1_persona}</option>
                                ))}
                            </select>
                        </div>
                        <button className="modal-botton" type="submit">Actualizar municipio</button>
                    </form>
                </div>
            </div>
        )
    );
}

export default MunicipioFormEdit;