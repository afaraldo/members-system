import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/signup', { email, password, confirmPassword }, {withCredentials:true})
            .then(res=> navigate('/'))
            .catch(err=> console.log(err))
    }
    
    return (
        <div className='col-12 col-md-6 mt-5'>
            <div className='col-12 col-md-9 mx-auto card bg-white border-4 border-dark text-dark px-5 py-5'>
                <h1 className='text-center'>Register</h1>
                <form onSubmit={submitHandler}>
                    <label htmlFor="" className='form-label mt-3'>Email:</label>
                    <input type="text" className='form-control'onChange={(e)=>setEmail(e.target.value)}/>   
                    <label htmlFor="" className='form-label mt-3'> Password</label>
                    <input type="password" className='form-control'onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="" className='form-label mt-3'> Confirm Password</label>
                    <input type="password" className='form-control'onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <div className='text-end'>
                        <button className='btn btn-primary mt-3'> Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp