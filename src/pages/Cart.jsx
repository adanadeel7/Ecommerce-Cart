import { useState } from 'react'

function Cart() {
  const products = [
  { id: 1, name: "Laptop", price: 999, image: "https://www.pexels.com/photo/person-using-a-macbook-4065623/" },
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

        {cart.map(item=> (
          <div key={item.id} className='flex justify-between items-center py-4 border-b'>
            <div className='w-1/2 flex items-center gap-3'>
              <span> {item.image}</span>
              <span> {item.name}</span>
            </div>

            <div className='w-1/6 text-center'>
              {item.price}
            </div>

            <div className='w-1/6 text-center flex items-center justify-center gap-2'> 
              <button className='w-8 h-8 rounded-full bg-gray-200'>-</button>
              <span>{item.quantity}</span>
              <button className='w-8 h-8 rounded-full bg-gray-200'>+</button>
            </div>
             <div className='w-1/6 text-right'>${item.price * item.quantity}</div>
          </div>
        ))}
        
        
      </div>
       
       
       <div className='flex justify-end' >
            <div className='bg-gray-500 p-6'>
                Subtotal
              </div>
            </div>
        

    
      
    </>
  )
}

export default Cart
