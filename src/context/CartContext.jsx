import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}) { 
    const [cart,setCart] = useState([])

const handleadd = (value) => {
  const product = cart.find(item => item.id === value.id); 
  if (product) { 
    const updatedcart = cart.map(item => item.id === value.id 
      ? {...item , quantity : item.quantity + 1} : item)
    setCart(updatedcart);
  } else { 
    setCart([...cart, {...value,quantity:1}])
  }
} 

const handleremove = (value) => { 
  const removed = cart.filter(items => items.id !== value.id) 
  setCart(removed)
}
return (
    <CartContext.Provider value={{handleadd,handleremove,cart}}>
        {children}
    </CartContext.Provider>

)
}


