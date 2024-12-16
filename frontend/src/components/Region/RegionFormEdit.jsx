import { useState, useEffect } from "react";
import api from "../../api";
import "../../styles/ModalEditarRegion.css";

function RegionFormEdit({isEditarOpen, cerrarEditar, region, get_regiones}) {
    const [id_region, set_id_region] = useState(region.id_region);
    const [nombre_region, set_nombre_region] = useState(region.nombre_region);

    const editarRegion = async (e) => {
        e.preventDefault();

        const updated_region = {
            id_region,
            nombre_region,
        };

        console.log(updated_region);

        try {
            const res = await api.put(`/api/regiones/update/${id_region}/`, updated_region);
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
        <div className="modal-editar-region">
            <div className="modal-editar-region-content">
                <span className="close" onClick={cerrarEditar}>&times;</span>
                <form onSubmit={editarRegion} className='form-container-region'>
                    <h2 className='form-container-h2'>Editar Región</h2>
                    <div className='form-container-agr'>
                        <label htmlFor="id_region">ID</label>
                        <input type="text" id="id_region" value={id_region} onChange={(e) => set_id_region(e.target.value)} disabled />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="nombre_region">Nombre de la región</label>
                        <input type="text" id="nombre_region" value={nombre_region} onChange={(e) => set_nombre_region(e.target.value)} required />
                    </div>
                    <button className="modal-button" type="submit">Actualizar región</button>
                </form>
            </div>
        </div>
    )
}

export default RegionFormEdit;