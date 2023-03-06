import { CartWidget } from "../CardWidget/CartWidget";
import { LogoNombre } from "./Logo-Nombre/Logo-nombre";
import { Secciones } from "./Secciones/Secciones";
import { MenuDesplegable } from './Secciones/MenuDesplegable/MenuDesplegable.jsx'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <LogoNombre/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02" style={{justifyContent: 'space-between'}}>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <MenuDesplegable/>
                        <Secciones/>
                    </ul>
                    <CartWidget/>   
                </div>
            </div>
        </nav>
    );
}