import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}) { 
    const [cart,setCart] = useState([])


useEffect(() => { 
  const saved = localStorage.getItem('cart')
  if(saved) { 
    setCart(JSON.parse(saved))
  }
},{})

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

function handlequantitylower(value) { 
  
  const product = cart.find(item => item.id === value.id); 
  if (value.quantity === 1) { 
    handleremove(value)
  } else { 
    const updatedcart = cart.map(item => item.id === value.id 
      ? {...item , quantity : item.quantity - 1} : item)
    setCart(updatedcart);
    
  }
}

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart))
}, [cart])


return (
    <CartContext.Provider value={{handleadd,handleremove,cart,setCart,handlequantitylower}}>
        {children}
    </CartContext.Provider>

)



}

export function useCart() { 
  const context = useContext(CartContext)
  if (!context) { 
    throw new Error("useCart must be used within CartProvider")
    
  }
  return context
}

