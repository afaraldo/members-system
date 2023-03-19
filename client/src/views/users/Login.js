import axios from 'axios';
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

export default props => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookie] = useCookies(['userToken']);
    
    const loginuser = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/login', {email: email, password: password}, { withCredentials: true, credentials: 'include' })
            .then(response=>{
                console.log(response);
                setCookie('user', response.data.user)
                navigate("/");
            })
            .catch(err=>{
                console.log(err);
            });
    }

    return (
        <div className='col-12 col-md-6 mt-5'>
            <div className='col-12 col-md-9 mx-auto card bg-white border-4 border-dark text-dark px-5 py-5'>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={loginuser}>
                    <label htmlFor="" className='form-label mt-3'>Email:</label>
                    <input type="text" value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="" className='form-label mt-3'> Password</label>
                    <input type="password" value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} />
                    
                    <Link className="btn btn-link mt-3" to={'/signup'}>
                        <i className="fa-solid fa-octagon-plus"></i>
                        New to here? Create an account.
                    </Link>

                    <button className='btn btn-block btn-primary mt-3'>Login</button>
                </form>
                
            </div>
        </div>
    )
}