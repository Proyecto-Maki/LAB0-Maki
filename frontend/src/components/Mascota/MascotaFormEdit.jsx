import { useState, useEffect } from "react";
import api from "../../api";
import "../../styles/Mascota/ModalEditarMascota.css";

function MascotaFormEdit({isEditarOpen, cerrarEditar, mascota, get_mascotas, get_viviendas}){
    const [id_mascota, set_id_mascota] = useState(mascota.id_mascota);
    const [nombre_mascota, set_nombre_mascota] = useState(mascota.nombre_mascota);
    const [especie_mascota, set_especie_mascota] = useState(mascota.especie_mascota);
    const [raza_mascota, set_raza_mascota] = useState(mascota.raza_mascota);
    const [sexo_mascota, set_sexo_mascota] = useState(mascota.sexo_mascota);
    const [id_vivienda, set_id_vivienda] = useState(mascota.id_vivienda);

    const editarMascota = async (e) => {
        e.preventDefault();

        const updated_mascota = {
            id_mascota,
            nombre_mascota,
            especie_mascota,
            raza_mascota,
            sexo_mascota,
            id_vivienda,
        };

        console.log(updated_mascota);

        try {
            const res = await api.put(`/api/mascotas/update/${id_mascota}/`, updated_mascota);
            if (res.status === 200) {
                alert("Mascota actualizada");
                cerrarEditar(); // Cierra el modal
            } else {
                alert("Error al actualizar la mascota");
            }
        } catch (err) {
            console.log(err.response.data);
            alert("Error al actualizar la mascota");
        }
    }

    return (
        <div className="modal-editar-mascota">
            <div className="modal-editar-mascota-content">
                <span className="close" onClick={cerrarEditar}>&times;</span>
                <form onSubmit={editarMascota} className='form-container-mascota'>
                    <h2 className='form-container-h2'>Editar Mascota</h2>
                    <div className='form-container-agr'>
                        <label htmlFor="id_mascota">ID</label>
                        <input type="text" id="id_mascota" value={id_mascota} onChange={(e) => set_id_mascota(e.target.value)} disabled />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="nombre_mascota">Nombre</label>
                        <input type="text" id="nombre_mascota" value={nombre_mascota} onChange={(e) => set_nombre_mascota(e.target.value)} required />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="especie_mascota">Especie</label>
                        <input type="text" id="especie_mascota" value={especie_mascota} onChange={(e) => set_especie_mascota(e.target.value)} required />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="raza_mascota">Raza</label>
                        <input type="text" id="raza_mascota" value={raza_mascota} onChange={(e) => set_raza_mascota(e.target.value)} required />
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="sexo_mascota">Sexo</label>
                        <select id="sexo_mascota" value={sexo_mascota} onChange={(e) => set_sexo_mascota(e.target.value)} required>
                            <option value="M">Macho</option>
                            <option value="H">Hembra</option>
                        </select>
                    </div>
                    <div className='form-container-agr'>
                        <label htmlFor="id_vivienda">Vivienda</label>
                        <select id="id_vivienda" value={id_vivienda} onChange={(e) => set_id_vivienda(e.target.value)} required>
                            <option value="">Selecciona una vivienda</option>
                            {get_viviendas().map((vivienda) => (
                                <option key={vivienda.id_vivienda} value={vivienda.id_vivienda}>{vivienda.id_vivienda} {vivienda.direccion_vivienda}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Actualizar mascota</button>
                </form>
            </div>
        </div>
    );

}

export default MascotaFormEdit;