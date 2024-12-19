import { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import '../../styles/Mascota/MascotaForm.css';

function MascotaForm ({get_mascotas, get_viviendas}){
    const [nombre_mascota, set_nombre_mascota] = useState("");
    const [especie_mascota, set_especie_mascota] = useState("");
    const [raza_mascota, set_raza_mascota] = useState("");
    const [sexo_mascota, set_sexo_mascota] = useState("M");
    const [id_vivienda, set_id_vivienda] = useState("");

    const navigate = useNavigate();

    const create_mascota = async (e) => {
        e.preventDefault();
        const nueva_mascota = {
            nombre_mascota: nombre_mascota,
            especie_mascota: especie_mascota,
            raza_mascota: raza_mascota,
            sexo_mascota: sexo_mascota,
            id_vivienda: id_vivienda,
        };
        console.log(nueva_mascota);

        api
            .post("/api/mascotas/", nueva_mascota)
            .then((res) => {
                if (res.status === 201) {
                    alert("Mascota creada");
                } else {
                    alert("Error al crear la mascota");
                }
                get_mascotas();
                set_nombre_mascota("");
                set_especie_mascota("");
                set_raza_mascota("");
                set_sexo_mascota("");
                set_id_vivienda("");
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Error al crear la mascota");
            });
    } 

    return (
        <form className="form-container-mascota" onSubmit={create_mascota}>
            <h2>Crear Mascota</h2>
            <div className="form-group-mascota">
                <label>Nombre</label>
                <input type="text" value={nombre_mascota} onChange={(e) => set_nombre_mascota(e.target.value)} required />
            </div>
            <div className="form-group-mascota">
                <label>Especie</label>
                <input type="text" value={especie_mascota} onChange={(e) => set_especie_mascota(e.target.value)} required />
            </div>
            <div className="form-group-mascota">
                <label>Raza</label>
                <input type="text" value={raza_mascota} onChange={(e) => set_raza_mascota(e.target.value)} required />
            </div>
            <div className="form-group-mascota">
                <label>Sexo</label>
                {/* <input type="text" value={sexo_mascota} onChange={(e) => set_sexo_mascota(e.target.value)} required /> */}
                <select id="sexo_mascota" value={sexo_mascota} onChange={(e) => set_sexo_mascota(e.target.value)} required>
                    <option value="M">Macho</option>
                    <option value="H">Hembra</option>
                </select>
            </div>
            <div className="form-group-mascota">
                <label>Vivienda</label>
                {/* <input type="text" value={id_vivienda} onChange={(e) => set_id_vivienda(e.target.value)} required /> */}
                <select id="id_vivienda" value={id_vivienda} onChange={(e) => set_id_vivienda(e.target.value)} required>
                    <option value="">Seleccione una vivienda</option>
                    {get_viviendas.map((vivienda) => (
                        <option key={vivienda.id_vivienda} value={vivienda.id_vivienda}>{vivienda.id_vivienda} {vivienda.direccion_vivienda}</option>
                    ))}
                </select>
            </div>
            <button className='form-container-p-botton' type="submit">Crear mascota</button>
        </form>
    );

}

export default MascotaForm;