import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";

export const Item = ({item}) => {
    const {darkMode} = useDarkModeContext()
    return (
        <div className={`rounded card mb-3 card-producto ${darkMode && 'card-dark'}`} style={{width: '20rem'}}>
            <img src={item.imagenCard} className="card-img-top mt-2 rounded" alt={`${item.nombre} en madera`} height={300}/>
                <div className={`card-body ${darkMode ? 'card-dark' : 'card-Body'}`}>
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text mb-0">{item.descripcion}</p>
                </div>
                <div className="precio-cards">
                    <div>
                        {item.stock === 0
                            ?
                            <p className="text-danger">
                                Sin Stock   
                            </p>
                            :
                            <p>
                            $ {new Intl.NumberFormat('de-DE').format(item.precio)}
                            </p>
                        }
                    </div>
                </div>
                <div className="div-boton-cards">
                    <Link className="nav-link" to={`/product/${item.id}`}><button className={`btn ${darkMode ? 'btn-primary' : 'btn-outline-secondary'} rounded-pill`}>Ver Producto</button></Link>
                </div>
        </div>
    );
}