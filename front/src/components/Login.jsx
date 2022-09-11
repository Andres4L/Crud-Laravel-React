import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useNavigate, useParams } from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const auth = (e) => {
        e.preventDefault();

        if (email.length > 0 && password.length > 0) {
            axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
                axios
                    .post("http://localhost:8000/api/login", {
                        email: email,
                        password: password,
                    })
                    .then((response) => {
                        if (response.data.status === 1){
                            localStorage.setItem("token",response.data.access_token);
                            navigate('/create')
                        }else{

                        }
                        console.log(response)

                    })

                    .catch(function (error) {
                        console.error(error);
                    });
            });
        }
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={auth}>
                <div className='mb-3'>
                    <label className='from-label'>Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='from-label'>Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        className='form-control'
                    />
                </div>

                <button type='submit' className='btn btn-primary'>Ingresar</button>

            </form>

           {/*  <div className="alert alert-danger" role="alert">
                ATENCION 
            </div> */}
        </div>
    )
}

export default Login

