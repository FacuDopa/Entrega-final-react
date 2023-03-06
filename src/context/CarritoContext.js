import { useContext, createContext, useState } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoPorvider = (props) => {

   const [carrito, setCarrito] = useState([])

   /*
      Agregar producto *
      Eliminar producto *
      Precio total *
      Vaciar carrito *
      Cantidad total de prod en carito *
      Si existe producto en el carrito *
   */

  //verificar prod en carrito
   const isInCart = (id) => {
     //si existe me lo devuelve sino undefined
      return carrito.find(prod => prod.id === id)
   }
   
   //agregar producto
   const addItem = (producto, cantidad) => {
      if (isInCart(producto.id)) {//Reemplazo la cantidad

         const indice = carrito.findIndex(prod => prod.id === producto.id)
         const aux = [...carrito]
         aux[indice].cant = cantidad
         setCarrito(aux)

      }else{//creo el obj en carrito
         
         const prodCart = {
            ...producto,
            cant: cantidad
         }
         //opcion 1 (mejor)
         setCarrito([...carrito, prodCart])
         //opcion 2 (mas larga)
         /*
            const aux = [...carrito]
            aux.push(prodCart)
            setCarrito(aux)
         */
      }
   }

   //vaciar el carrito
   const emptyCart = () => {
      setCarrito([])
   }

   //remover productos del carrito
   const removeItem = (id) => {
      setCarrito(carrito.filter(prod => prod.id !== id))
   }

   //Cantidad total de productos en el carrito
   const getItemQuantity = () => {
      return carrito.reduce((acum, prod) => acum += prod.cant, 0)
   }

   //precio total 
   const totalPrice = () => {
      return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
   }

   console.log(carrito);

   return (
      <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart ,getItemQuantity, totalPrice}}>
         {props.children}
      </CarritoContext.Provider>
   )
   
}