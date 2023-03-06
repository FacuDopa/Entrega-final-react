import './BotonDarkMode.css'
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useState } from 'react';

export const BotonDarkMode = () => {
    const {darkMode, toggleDarkMode} = useDarkModeContext()

    const luna = 'https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg'
    const sol = 'https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg'

    const [imagen, setImagen] = useState(sol)
    const [clases, setClases] = useState()


    const cambiarTema = () => {
        if(!darkMode){
            setTimeout(() => {
                setImagen(luna)
                setClases('shadow-dark');
            }, 100);

        }else{
            setTimeout(() => {
                setImagen(sol)
                setClases("shadow-light");
            }, 100);
        }
    }

    return(
        <div className={`theme-container ${clases}`} onClick={() => {cambiarTema(); toggleDarkMode()}}>
            <img id={`theme-icon`} src={imagen} alt="ERR"/>
        </div>
    )
}