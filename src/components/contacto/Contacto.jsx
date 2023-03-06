import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Contacto = () => {
    const datosformulario = React.useRef() //creo la referencia
    let navigate = useNavigate() //ubicacion actual del componente 
    const MySwal = withReactContent(Swal)

    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosformulario.current); //consulto el estado actual del form
        const datForm = new FormData(datosformulario.current) //Genero un objeto iterator de esos datos
        const contacto = Object.fromEntries(datForm) //Transforma en un objeto litaral
        e.target.reset() //reseteo el formulario
        navigate('/') //redirijo a pag inicial

        //Transforma el texto pasado en el parametro string con la primera letra en mayuscula
        const Mayuscula = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        MySwal.fire({
            title: 'Consulta Enviada',
            html: <p>{Mayuscula(contacto.nombre)}, tus datos y consulta fueron enviados correctamente</p>,
            icon: 'success'
        })
    }

    return (
        <div className="container mt-3">
            <form onSubmit={consultarFormulario} ref={datosformulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero Telefonico</label>
                    <input type="number" className="form-control" name="celular"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="consulta" className="form-label">Consulta</label>
                    <textarea className="form-control" rows={3} name="consulta" required/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>

        </div>
    );
}
