import { useState } from 'react'
import { useCart } from '../context/CartContext'

function Cart() {
  const {cart,handlequantitylower,handleadd} = useCart()

  if (cart.length === 0) {
    return <div className="text-center">🛒 Your Cart is Empty</div>
  }

  return (
    <>
      

      <div className='flex justify-center text-4xl font-medium pt-10 '>
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
              <img src={item.image} alt={item.name}/> 
              <span> {item.name}</span>
            </div>

            <div className='w-1/6 text-center'>
              {item.price}
            </div>

            <div className='w-1/6 text-center flex items-center justify-center gap-2'> 
              <button className='w-8 h-8 rounded-full bg-gray-200' onClick={()=> handlequantitylower(item)}>-</button>
              <span>{item.quantity}</span>
              <button className='w-8 h-8 rounded-full bg-gray-200' onClick={() => handleadd(item)}>+</button>
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
