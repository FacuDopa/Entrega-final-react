import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
   apiKey: process.env.API_KEY,
   authDomain: "react-coder-a19de.firebaseapp.com",
   projectId: "react-coder-a19de",
   storageBucket: "react-coder-a19de.appspot.com",
   messagingSenderId: "985088540737",
   appId: "1:985088540737:web:23e8e7376d46b7506e86c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore() // Consultar base de datos
/*CRUD Productos
   CREAR
   LEER
   MODIFICACION
   ELIMINACION
   de datos

*/

export const añadirDBDD = async () => {
   await addDoc(collection(db, 'productos'), {
      nombre: 'Mesa',
      descripcion: 'Mesa con las patas retraibles, grande, sirve para jardines patios terrazas o dentro de casa, barnizada y/o pintadad',
      precio: 5000,
      stock: 80,
      idCategoria: 'Muebles-Grandes',
      imagenCard: 'https://firebasestorage.googleapis.com/v0/b/react-coder-a19de.appspot.com/o/WhatsApp%20Image%202023-03-04%20at%2010.11.43%20(1).jpeg?alt=media&token=f9cf5ce5-ac64-4292-967f-b730d9c7a628',
   })
}

export const cargarBDD = async () => {
   const promise = await fetch('./json/productos.json')
   const productos = await promise.json()
   productos.forEach( async (prod) => {
      await addDoc(collection(db,"productos"), {

         nombre: prod.nombre,
         descripcion : prod.descripcion,
         precio: prod.precio,
         stock: prod.stock,
         idCategoria: prod.idCategoria,
         imagenCard: prod.imagenCard
      })
   })
}

export const getProducts = async() => {
   const productos = await getDocs(collection(db, 'productos'))
   const items = productos.docs.map(prod => {
      return {...prod.data(), id: prod.id}
   })
   return items
}

export const getProduct = async(id) => {
   const producto = await getDoc(doc(db, 'productos', id))
   const item = {...producto.data(), id: producto.id}
   return item
}

export const getOrdenCompra = async(idCompra) => {
   const compra = await getDoc(doc(db, 'ordenCompra', idCompra))
   const item = {...compra.data(), id: compra.id}
   return item
}

export const updateProduct = async(id, info) => {
   await updateDoc(doc(db, 'productos', id), info)
}

export const deleteProduct = async(id) => {
   await deleteDoc(doc(db, 'productos', id))
}

//Create orden Compra

export const createOrdenCompra = async(cliente, productos,precioTotal, fecha) => {
   const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      datosCliente: cliente,
      productos: productos,
      precioTotal: precioTotal, 
      fecha: fecha,
      estado: 'Pendiente'
   })
   return ordenCompra
}