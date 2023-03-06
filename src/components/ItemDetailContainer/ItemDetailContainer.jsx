import {useState, useEffect} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../firebase/firebase';
import { Carrusel } from '../Carousel/Carousel';
import { useDarkModeContext } from '../../context/DarkModeContext';

export const ItemDetailContainer = () => {

    const [producto , setProducto] = useState([])
    const {darkMode} = useDarkModeContext()

    const {id} = useParams()

    useEffect(() => {
        getProduct(id)
        .then(item => setProducto(item))
    }, [])

    return (
        <>
            <div className='card my-3 container itemDetail'>
                <ItemDetail item={producto}/>
            </div>
            <h2 className={` titulo-carrusel my-4 ${darkMode && 'text-white'} `}>Mas de Nuestros productos</h2>
            <Carrusel/>
        </>
    );
}