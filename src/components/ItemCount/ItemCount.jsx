import { useState } from "react";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { toast } from 'react-toastify'

export const ItemCount = ({valIicial, stock, onAdd}) => {
    const [contador, setContador] = useState(valIicial)
          //variable    //modificar var    //estado inicial

    const {darkMode} = useDarkModeContext()

    const sumar = () => (contador < stock) && setContador(contador + 1);
    const restar = () => (contador > valIicial) && setContador(contador - 1);
    const agregarCarrito = () => {
        onAdd(contador)
        toast.success(`Agregaste ${contador} productos al carrito!`, {
            theme: `${darkMode ? 'dark' : 'light'}`,
            closeOnClick: 'true'
        }) 
    }



    return (
        <>
            <button className={`btn ${darkMode ? 'btn-primary' : 'btn-outline-secondary'} me-3 rounded-pill`} onClick={() => restar() }>-</button>
                {contador}
            <button className={`btn ${darkMode ? 'btn-primary' : 'btn-outline-secondary'} ms-3 rounded-pill`} onClick={() => sumar() }>+</button>
            <button className={`btn ${darkMode ? 'btn-success' : 'btn-outline-success'} mt-2 container rounded-pill ${stock === 0 && 'disabled'}`} onClick={() => agregarCarrito()}>Agregar al carrito</button>
        </>
    );
}