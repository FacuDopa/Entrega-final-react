import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getProducts } from "../../firebase/firebase";
import {useState, useEffect} from 'react';
import { ItemCarrusel } from "../ItemCarrusel/ItemCarrusel";


const responsive = {
    desktop: {
        breakpoint: { max: 2000, min: 1080 },
        items: 3,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1080, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        
    }
};

export const Carrusel = () => {

    const [prod, setProd] = useState([])

    useEffect(() => {
        getProducts()
        .then(item => {
            const productsC = item.filter(prod => prod.stock > 0)
            setProd(productsC)
        })
    }, []);
    
    return(

        <>
            
            <div className="div-carrusel mb-4">
                <Carousel 
                    responsive={responsive}
                    rewind={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2500}
                    showDots={true}
                    arrows= {false}
                    centerMode={true}
                    itemClass='altura-carrusel'
                    containerClass='contenedor-carrusel'
                >
                    {prod.map(prod => (
                        <ItemCarrusel key={prod.id} item={prod} />
                    ))}
                </Carousel>
            </div>
        </>
    )

}
