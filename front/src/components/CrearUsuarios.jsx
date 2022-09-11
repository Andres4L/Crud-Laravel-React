import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/register'

const CrearUsuarios = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(0)
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, { name: name, email: email, phone: phone, password: password })
        navigate('/create')
    }
    return (
        <div>
            <h3>Agregar Usurario</h3>
            <form onSubmit={register}>
                <div className='mb-3'>
                    <label className='from-label'>Nombre</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

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
                    <label className='from-label'>Telefono</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type='number'
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

                <button type='submit' className='btn btn-primary'>Agregar</button>

            </form>
        </div>
    )
}

export default CrearUsuarios
