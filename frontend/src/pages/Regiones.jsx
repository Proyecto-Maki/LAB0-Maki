import { useState, useEffect } from "react";
import api from "../api";
import Region from "../components/Region/Region";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Regiones() {
    const [regiones, set_regiones] = useState([]);

    const get_regiones = () => {
        api
            .get("/api/regiones/")
            .then((res) => res.data)
            .then((data) => { set_regiones(data), console.log("Regiones", data) })
            .catch((err) => alert(err));
    };

    const delete_region = (id) => {
        api
            .delete(`/api/regiones/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Región eliminada");
                } else {
                    alert("Error al eliminar la región");
                }
                get_regiones();
            })
            .catch((err) => alert(err));
    };

    useEffect(() => {
        get_regiones();
    }, []);

    return(
        <div className="regiones">
            <Header />
            <div className="regiones-container">
                <div className="regiones-title">Regiones</div>
                
            </div>
            <div className="regiones-list">
                    {
                        regiones.map((region) => (
                            <Region
                                key={region.id_region}
                                region={region}
                                get_regiones={get_regiones}
                                deleteRegion={delete_region}
                            />
                        ))
                    }
                </div>
            <Footer />
        </div>
    );

}