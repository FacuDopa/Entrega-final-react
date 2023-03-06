import { Link } from "react-router-dom";

export const ItemsMenu = () => {
    return (
        <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={'/category/Muebles-Grandes'}>Muebles Grandes</Link></li>
            <li><Link className="dropdown-item" to={'/category/Muebles-Medianos'}>Muebles Medianos</Link></li>
            <li><Link className="dropdown-item" to={'/category/Muebles-Pequeños'}>Muebles Pequeños</Link></li>
        </ul>
    );
};