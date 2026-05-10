import { useState } from 'react'

function App() {
  const products = [
  { id: 1, name: "Laptop", price: 999, image: "💻" },
  { id: 2, name: "Mouse", price: 29, image: "🖱️" },
  { id: 3, name: "Keyboard", price: 79, image: "⌨️" },
  { id: 4, name: "Monitor", price: 299, image: "🖥️" },
  { id: 5, name: "Headphones", price: 149, image: "🎧" },
  { id: 6, name: "USB Cable", price: 9, image: "🔌" }
]

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
    <>
      <div className='flex justify-between items-center px-10 py-6 bg-gray-900 text-white'> 
    
          <div className='flex gap-6 '> 
            <h3 className='cursor-pointer hover:text-gray-300'> Home</h3>
            <h3 className='cursor-pointer hover:text-gray-300'>Pages</h3>
            <h3 className='cursor-pointer hover:text-gray-300'> Docs </h3>
            
          </div>
          
          <div className='flex gap-6 '>
            <h3 className='cursor-pointer hover:text-gray-300'>Log in</h3>
            <h3 className='cursor-pointer hover:text-gray-300'> Cart</h3>
          </div>
      </div>

      <div className='flex justify-center text-4xl font-medium pt-10'>
        <h1>Your Cart</h1>
      </div>
    <div className='flex-col'>
       <div className='flex justify-between px-10 py-6 text-gray-600 border-b'> 
    
          
            <div className='w-1/2'>Product</div>
            <div className='w-1/6 text-center'>Price</div>
            <div className='w-1/6 text-center'>Quantity</div>
            <div className='w-1/6 text-right'>Total</div>
            


        </div>
        
        
      </div>
       
       
       <div className='flex justify-end' >
            <div className='bg-gray-500 p-6'>
                Subtotal
              </div>
            </div>
        

    
      
    </>
  )
}

export default App
