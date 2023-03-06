import { useCarritoContext } from "../../context/CarritoContext";
import { useDarkModeContext } from "../../context/DarkModeContext";

export const ItemCart = ({item}) => {

    const {removeItem} = useCarritoContext()
    const {darkMode} = useDarkModeContext()

    return (
        <div className={`card mb-3 rounded ${darkMode && 'card-dark'}`} style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.imagenCard} className="img-fluid rounded" alt={`imagen de producto ${item.nombre}`} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">Cantidad: {item.cant}</p>
                        <p className="card-text">Precio Unitario: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p className="card-text">Subtotal: $ {new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
                        <button onClick={() => removeItem(item.id)} className={`btn ${darkMode ? 'btn-danger' : 'btn-outline-danger'} rounded-pill`}>Eliminar Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
};