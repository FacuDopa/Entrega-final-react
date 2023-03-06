import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";

export const CartWidget = () => {

    const {getItemQuantity} = useCarritoContext()

    return (
        
        <Link className="nav-link" to={'/Cart'}>
            <i class="fa-solid fa-cart-shopping fa-2x"></i>
            {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
        </Link>
    );
}
