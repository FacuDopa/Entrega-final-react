import { Link } from "react-router-dom";

export const Secciones = () => {
    return (
        <>
        <li className="nav-item">
            <Link className="nav-link" to={'/contacto'}><button className='btn btn.light'>Contacto</button></Link>
        </li>
        </>
    );
}