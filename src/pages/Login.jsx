import {React, useState} from 'react'
function Login() {
   const [formdata,setFormData] = useState({
        name:'', 
        email:'', 
        password:'',
        age:'', 
        role:'student',
        terms : false, 

    })
    const [submit, setSubmit] = useState(false)
    const [error, setError] = useState("")

    const handlename = (names) => { 
        if (names.length >= 3) { 
            setFormData({...formdata, name:names})
            setError("")
            console.log(formdata)
        } else { 
            setError("The name is too short")
        }

    }



    const handleage = (value) => { 
        if (value >= 18 && value <= 100) { 
            setFormData({...formdata, age:value})
            setError("")
        } else { 
            setError("The Age is Invalid")
        }

    }

    const handleemail = (email) => {

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (validEmail.test(email)) {

        setFormData((prev) => ({
            ...prev,
            email: email
        }))

        setError("")

    } else {

        setError("Invalid Email")

    }
}

 const handlePassword = (password) => {
    setFormData({ ...formdata, password: password })
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecial = /[!@#$%^&*]/.test(password)

    if (
        password.length >= 8 &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecial
    ) {

        setError("")

    } else {

        setError(
            "Password must contain 8 characters, uppercase, lowercase, number, and special character"
        )
    }
}

    const handlerole = (value) => { 
        
            setFormData({...formdata, role:value})
            setError("")
            console.log(formdata)

    }

   const handlesubmit = () => { 
    if (formdata.name && formdata.email && formdata.password && formdata.age && formdata.role) {
        setSubmit(true)
        setError('')
        console.log(formdata)
    } else {
        setError('Please fill all fields and accept terms')
        setSubmit(false)
    }
}


    const handleconfirmpassword = (password) => { 
        if (password == formdata.password) { 
            setError('')
        } else { 
            setError('Passwords Do Not Match')
        }

    }
  return (
   

    <div className='w-full h-screen bg-white flex flex-col items-center justify-center '>
        
        <h1 className='text-4xl font-bold mb-10'>Login Below</h1>
        
        <div>
            <h3 className='text-left text-gray-600'>Name</h3>
            <input className='text-black text-center transition-none outline-none bg-gray-200 p-2 rounded-lg shadow-xl mb-2' onChange={(e) => handlename(e.target.value)}/>
        </div>

         <div>
            <h3 className='text-left text-gray-600'>Email</h3>
            <input className='text-black text-center transition-none outline-none bg-gray-200 p-2 rounded-lg shadow-xl mb-2' onChange={(e) => handleemail(e.target.value)}/>
        </div>

         <div>
            
            <h3 className='text-left text-gray-600'>Password</h3>
            <input 
            className='text-black text-center transition-none outline-none bg-gray-200 p-2 rounded-lg shadow-xl mb-2' 
            onChange={(e) => handlePassword(e.target.value)}
            type='password'
            
            />
        </div>

         <div >
            <h3 className='text-left text-gray-600'>Confirm Password</h3>
            
            <input 
            className='text-black text-center transition-none outline-none bg-gray-200 p-2 rounded-lg shadow-xl mb-2' 
            onChange={(e) => handleconfirmpassword(e.target.value)}
            type='password'
        
            />
        </div>

         
    
  

        <div className='bg-orange-400 p-2 pl-10 pr-10 rounded-2xl shadow-xl m-0.5 text-white mt-5'>
            <input value={"Submit"} 
            className=' text-center transition-none outline-none ' 
            onClick={() => handlesubmit()} 
            type='button'
            disabled={!formdata.name || !formdata.email || !formdata.password || !formdata.age || !formdata.role}
            />
            
    
       

        </div>
         {submit && (
            <div className='mt-10 p-6 bg-gray-100 rounded-lg w-96 border border-gray-300'>
                <h3 className='font-bold text-lg mb-3 text-center text-gray-700'>✅ Form Submitted Successfully</h3>
                <div className='bg-white p-4 rounded-md'>
                    <pre className='text-sm text-gray-800'>{JSON.stringify(formdata, null, 2)}</pre>
                </div>
            </div>
        )}

    
    </div>
    



  )
}

export default Login