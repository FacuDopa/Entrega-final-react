import React from "react";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";

export const ItemCarrusel = ({item}) => {

    const {darkMode} = useDarkModeContext()

    return (
        <div className={`card card-carrusel ${darkMode && 'card-dark'}`}>
            <img src={item.imagenCard} className='card-img-top rounded mt-1' alt={`${item.nombre} en madera`} style={{ height: "100px", width: '40%'}} />
            <div className={`p-0 card-body ${darkMode ? 'card-dark' : 'card-Body'}`}>
                <h5 className="m-1 card-title">{item.nombre}</h5>
                <p className=" mb-1">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
            </div>
            <div className="div-boton-cards-carrusel mb-3">
                <Link className="nav-link link-card" to={`/`}><button  className={`boton-card btn ${darkMode ? 'btn-primary' : 'btn-outline-secondary'} rounded-pill`}>Volver al Inicio</button></Link>
            </div>
        </div>
    );
};
