import React from "react"
import { useCarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from '../../firebase/firebase'
import { useState } from "react"
import { useDarkModeContext } from "../../context/DarkModeContext"

export const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const {darkMode} = useDarkModeContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const MySwal = withReactContent(Swal)

    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [error, setError] = useState('');

    const handleInputChange1 = (e) => {
        setInputValue1(e.target.value);
        setError('');
    }

    const handleInputChange2 = (e) => {
        setInputValue2(e.target.value);
        setError('');
    }

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant //Descuento del stock la cantidad comprada
                updateProduct(prodCarrito.id, prodBDD)
            })
        })
        if (inputValue1 === inputValue2) {

            createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
    
                MySwal.fire({
                    title: '¡Muchas gracias por comprar con nosotros!',
                    html: <p>su orden de compra con el ID: {ordenCompra.id} por un total de ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito</p>,
                    icon: 'success'
                })
                emptyCart()
                e.target.reset()
                navigate("/")
            })
        }else {
            setInputValue2('')
            setError('Los Emails no son iguales')
        }
    }

    return (
    <>
        {carrito.length === 0 
            ? 
            <>  
                <div className="div-carrito-vacio">
                        <h2 style={{color: darkMode && "white"}}>Primero debes agregar al menos 1 producto al carrito</h2>
                        <p>Primero debes agregar productos al carrito</p>
                        <Link className='nav-link' to={'/'}><button className={`btn ${darkMode ? 'btn-primary' : 'btn-outline-secondary'} mx-2 rounded-pill`}>Continuar Comprando</button></Link>    
                </div>
            </>
            : 
            <div className="container" style={{marginTop:"20px"}}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                <input type="text" className="form-control" name="nombre" required/>
            </div>
                <div className="mb-3">
                <label htmlFor="email"  className="form-label">Email</label>
                <input type="email" value={inputValue1} onChange={handleInputChange1} className="form-control" name="email" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="repEmail" className="form-label">Repetir Email</label>
                <input type="email" value={inputValue2} onChange={handleInputChange2} className="form-control" name="repEmail" required/>
                {error
                    &&
                    <p style={{color: 'red'}}>Los emails no coinciden, Intente nuevamente</p>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Numero telefonico</label>
                <input type="number" className="form-control" name="celular" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Direccion</label>
                <input type="text" className="form-control" name="direccion" required/>
            </div>

            <button type="submit" className="btn btn-primary">Finalizar Compra</button>

            </form>
        </div>
        }
    
    </>
    )
}