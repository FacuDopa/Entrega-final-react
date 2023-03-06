import { Link } from "react-router-dom";
export const LogoNombre = () => {
    return (
        <>
        <Link className="navbar-brand" to={'/'}>
            <img src='../img/logo.png' alt="Logo" width="30" className="d-inline-block align-text-top" /> Carpinteria J&R
        </Link>
        </>
    );
}