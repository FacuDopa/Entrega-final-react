

export const Footer = () => {

    return (    
        <footer className="bg-dark text-center text-white" style={{overflow: 'hidden', bottom: 0, width: '100%', height: '150px'}}>
            <div className="container p-4 pb-0">

                <section className="mb-2">
    
                    <a className="btn btn-outline-light rounded-pill m-1" href="https://www.facebook.com/profile.php?id=100063762870269" role="button"><i className="fab fa-facebook-f" /></a>
    
                    <a className="btn btn-outline-light rounded-pill m-1" href="https://www.instagram.com/trabajos_en_pino/" role="button"><i className="fab fa-instagram" /></a>
    
                    <a className="btn btn-outline-light rounded-pill m-1" href="https://github.com/FacuDopa/Entrega-Final" role="button"><i className="fab fa-github" /></a>

                    <a className="btn btn-outline-light rounded-pill m-1" href="https://wa.me/c/5491133370121" role="button"><i className="fab fa-whatsapp" /></a>
                </section>

            </div>
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2023 Copyright:
                <a className="text-white" href="">J&R Desings</a>
            </div>
        </footer>
    );
};