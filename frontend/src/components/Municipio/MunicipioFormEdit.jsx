import { useState, useEffect } from "react";
import api from "../../api";
import "../../styles/Municipio/ModalEditarMunicipio.css";

function MunicipioFormEdit ({isEditarOpen, cerrarEditar, municipio, get_municipios, get_departamentos}){
    const [id_municipio, set_id_municipio] = useState(municipio.id_municipio);
    const [nombre_municipio, set_nombre_municipio] = useState(municipio.nombre_municipio);
    const [id_departamento, set_id_departamento] = useState(municipio.id_municipio);

    const editarMunicipio = async (e) => {
        e.preventDefault();

        const update_municipio = {
            id_municipio,
            nombre_municipio,
            id_departamento,
        }

        console.log(update_municipio);

        try {
            const res = await api.put(`/api/municipios/update/${id_municipio}/`, update_municipio);
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

    return(
        <div className="modal-editar-municipio">
            <div className="modal-editar-municipio-content">
                <span className="close" onClick={cerrarEditar}>&times;</span>
                <form onSubmit={editarMunicipio} className='form-container-municipio'>
                    <h2 className='form-container-h2'>Editar Municipio</h2>
                    <div className='form-container-agr'>
                        <label htmlFor="id_municipio">ID</label>
                        <input type="text" id="id_municipio" value={id_municipio} onChange={(e) => set_id_municipio(e.target.value)} disabled />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="nombre_municipio">Nombre Municipio</label>
                        <input type="text" id="nombre_municipio" value={nombre_municipio} onChange={(e) => set_nombre_municipio(e.target.value)} required/>
                    </div>
                    
                    <div className='form-container-agr'>
                        <label htmlFor="id_departamento">ID Departamento</label>
                        <select id="id_departamento" value={id_departamento} onChange={(e) => set_id_departamento(e.target.value)}>
                            <option value="">Seleccione el departamento</option>
                            {get_departamentos.map((departamento) => (
                                <option key={departamento.id_departamento} value={departamento.id_departamento}>
                                    {departamento.id_departamento} {departamento.nombre_departamento} 
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="modal-botton" type="submit">Actualizar municipio</button>
                </form>
            </div>
        </div>
    );

}

export default MunicipioFormEdit;