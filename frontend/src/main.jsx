import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cart from './pages/Cart'
import Products from './pages/Products'
import './index.css'
import { BrowserRouter, Routes,Route } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import { CartProvider } from './context/CartContext.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CartProvider>
      <Navbar/>
      <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login/>} />
            <Route path='/checkout'/>
    

      </Routes>
      </CartProvider>
      
      
    </StrictMode>
  </BrowserRouter>
  
  ,
)
