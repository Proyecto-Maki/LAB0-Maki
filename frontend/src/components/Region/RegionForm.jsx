import { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import '../../styles/Region/RegionForm.css';

function RegionForm({get_regiones}){
    const [nombre_region, set_nombre_region] = useState("");
    const navigate = useNavigate();

    const create_region = async (e) => {
        e.preventDefault();
        const nueva_region = {
            nombre_region: nombre_region,
        };
        console.log(nueva_region);

        api
            .post("/api/regiones/", nueva_region)
            .then((res) => {
                if (res.status === 201) {
                    alert("Región creada");
                } else {
                    alert("Error al crear la región");
                }
                get_regiones();
                set_nombre_region("");
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Error al crear la región");
            });

    }


    return(
        <form className="region-form" onSubmit={create_region}>
            <h2>Crear Región</h2>
            <div className="region-form-group">
                <label>Nombre de la región</label>
                <input
                    type="text"
                    value={nombre_region}
                    onChange={(e) => set_nombre_region(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Crear región</button>

        </form>
    );

}

export default RegionForm;