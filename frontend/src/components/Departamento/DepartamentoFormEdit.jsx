import { useState } from 'react';
import api from '../../api';
import '../../styles/Departamento/ModalEditarDepartamento.css';

function DepartamentoFormEdit({ isEditarOpen, cerrarEditar, departamento, get_departamentos, get_regiones, get_personas }) {
    const [nombre_departamento, set_nombre_departamento] = useState(departamento.nombre_departamento);
    const [id_region, set_id_region] = useState(departamento.id_region);
    const [id_gobernador, set_id_gobernador] = useState(departamento.id_gobernador); // New state for id_gobernador

    const editarDepartamento = async (e) => {
        e.preventDefault();

        const updated_departamento = {
            nombre_departamento,
            id_region,
            id_gobernador, // Include id_gobernador in the updated data
        };

        console.log(updated_departamento);

        try {
            const res = await api.put(`/api/departamentos/update/${departamento.id_departamento}/`, updated_departamento);
            if (res.status === 200) {
                alert("Departamento actualizado");
                cerrarEditar(); // Cierra el modal
            } else {
                alert("Error al actualizar el departamento");
            }
        } catch (err) {
            console.log(err.response.data);
            alert("Error al actualizar el departamento");
        }
    }

    return (
        isEditarOpen && (
            <div className="modal-editar-departamento">
                <div className="modal-editar-departamento-content">
                    <span className="close" onClick={cerrarEditar}>&times;</span>
                    <form onSubmit={editarDepartamento}>
                        <h2 className='form-container-h2'>Editar Departamento</h2>
                        <div className='form-container-agr'>
                            <label htmlFor="nombre_departamento">Nombre</label>
                            <input type="text" id="nombre_departamento" value={nombre_departamento} onChange={(e) => set_nombre_departamento(e.target.value)} required />
                        </div>
                        <div className='form-container-agr'>
                            <label htmlFor="id_region">Región</label>
                            <select id="id_region" value={id_region} onChange={(e) => set_id_region(e.target.value)} required>
                                <option value="">Seleccione una región</option>
                                {get_regiones.map((region) => (
                                    <option key={region.id_region} value={region.id_region}>{region.nombre_region}</option>
                                ))}
                            </select>
                        </div>
                        <div className='form-container-agr'>
                            <label htmlFor="id_gobernador">Gobernador</label>
                            <select id="id_gobernador" value={id_gobernador} onChange={(e) => set_id_gobernador(e.target.value)} required>
                                <option value="">Seleccione un gobernador</option>
                                {get_personas.map((persona) => (
                                    <option key={persona.id_persona} value={persona.id_persona}>{persona.nombre_1_persona} {persona.apellido_1_persona}</option>
                                ))}
                            </select>
                        </div>
                        <button className="modal-botton" type="submit">Actualizar departamento</button>
                    </form>
                </div>
            </div>
        )
    );
}

export default DepartamentoFormEdit;