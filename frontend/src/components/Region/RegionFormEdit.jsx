import { useState } from 'react';
import api from '../../api';
import '../../styles/Region/ModalEditarRegion.css';

function RegionFormEdit({ isEditarOpen, cerrarEditar, region, get_regiones }) {
    const [nombre_region, set_nombre_region] = useState(region.nombre_region);
    const [descripcion_region, set_descripcion_region] = useState(region.descripcion_region);

    const editarRegion = async (e) => {
        e.preventDefault();

        const updated_region = {
            nombre_region,
            descripcion_region,
        };

        console.log(updated_region);

        try {
            const res = await api.put(`/api/regiones/update/${region.id_region}/`, updated_region);
            if (res.status === 200) {
                alert("Región actualizada");
                cerrarEditar(); // Cierra el modal
            } else {
                alert("Error al actualizar la región");
            }
        } catch (err) {
            console.log(err.response.data);
            alert("Error al actualizar la región");
        }
    }

    return (
        isEditarOpen && (
            <div className="modal-editar-region">
                <div className="modal-editar-region-content">
                    <span className="close" onClick={cerrarEditar}>&times;</span>
                    <form onSubmit={editarRegion}>
                        <h2 className='form-container-h2'>Editar Región</h2>
                        <div className='form-container-agr'>
                            <label htmlFor="nombre_region">Nombre</label>
                            <input type="text" id="nombre_region" value={nombre_region} onChange={(e) => set_nombre_region(e.target.value)} required />
                        </div>
                        <div className='form-container-agr'>
                            <label htmlFor="descripcion_region">Descripción</label>
                            <input type="text" id="descripcion_region" value={descripcion_region} onChange={(e) => set_descripcion_region(e.target.value)} required />
                        </div>
                        <button className="modal-botton" type="submit">Actualizar región</button>
                    </form>
                </div>
            </div>
        )
    );
}

export default RegionFormEdit;