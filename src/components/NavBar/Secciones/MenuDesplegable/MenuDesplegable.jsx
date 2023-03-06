import { ItemsMenu } from "./ItemsMenu";

export const MenuDesplegable = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className='btn btn.light'>Categorias</button>
            </a>
            <ItemsMenu/>
        </li>
    );
}