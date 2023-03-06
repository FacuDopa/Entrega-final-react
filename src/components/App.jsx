import React from 'react';

//Importaciones de CSS
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify';

//Importaciones de Los modulos
import { NavBar } from './NavBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './contacto/Contacto';
import { BotonDarkMode } from './BotonDarkMode/BotonDarkMode';
import { Cart } from './Cart/Cart';
import { Checkout } from './Checkout/Checkout';
import { Footer } from './Footer/Footer';

//Importaciones de React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoPorvider } from '../context/CarritoContext';

import { añadirDBDD } from '../firebase/firebase';

function App() {

  // añadirDBDD()

  return (
    <BrowserRouter>
      <CarritoPorvider>
        <DarkModeProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/Checkout' element={<Checkout/>}/>
          </Routes>
          <Footer/>   
          <ToastContainer/>
          <BotonDarkMode/>
        </DarkModeProvider>
      </CarritoPorvider>
    </BrowserRouter>
  );
}

export default App;
