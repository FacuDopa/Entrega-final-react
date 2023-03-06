import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { useCarritoContext } from "../../context/CarritoContext";
import { useDarkModeContext } from "../../context/DarkModeContext";

export const Cart = () => {
    const {carrito, totalPrice, emptyCart} = useCarritoContext()
    const {darkMode} = useDarkModeContext()

    return(
        <>
            { carrito.length === 0 
                ? // Si el carrito esta vacio -> la condicion es verdadera
                    <>
                    <div className="div-carrito-vacio">
                        <h2 style={{color: darkMode && "white"}}>Carrito sin productos</h2>
                        <p>Primero debes agregar productos al carrito</p>
                        <Link className='nav-link' to={'/'}><button className={`btn ${darkMode ? 'btn-primary' : 'btn-outline-secondary'} mx-2 rounded-pill`}>Continuar Comprando</button></Link>    
                    </div>
                        
                    </>

                : // Si el carrito esta lleno -> la condicion es falsa
                    <div className="container cart-container">
                        {<ItemList products={carrito}/>}
                            <p className="fs-3 my-4 border border-dark rounded p-2 text-center fw-bold" style={{maxWidth: '540px'}}>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <div className="div-button">
                            <button className={`btn ${darkMode ? 'btn-danger' : 'btn-outline-danger'} mx-2 rounded-pill`} onClick={() => emptyCart()}>Vaciar Carrito</button>
                            <Link className="nav-link" to={'/'}><button className={`btn ${darkMode ? 'btn-primary' : 'btn-outline-secondary'} mx-2 rounded-pill`}>Continuar Comprando</button></Link>
                            <Link className="nav-link" to={'/checkout'}><button className={`btn ${darkMode ? 'btn-primary' : 'btn-outline-secondary'} mx-2 rounded-pill`}>Finalizar Compra</button></Link>
                        </div>
                    </div>
            }
        </>
    )
};

/* 
    Condicional N1 = 6 complejidad, 2 return 1 Condidional
    if(true) {
        return <p>Es Verdadero</p>
    }
    return <p>Es Falso</p>

-----------------------------------------------------------------------------

    Condicional N2 = 6 Complejidad, 1 return,  2 condicionales
    const condLogica = false
    return(
        <>
            {condLogica && <p>Es verdadero</p>}
            {!condLogica && <p>Es Falso</p>}
        </>
    )

-----------------------------------------------------------------------------

    Condicional N3 = 5 Complejidad, 1 return, 1 condicional(Ternario)
    const condLogica = true
    return(
        <>
            {condLogica ? <p>Es verdadero</p> : <p>Es Falso</p>}
        </>
    )
*/