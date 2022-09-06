import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/usuario'

const CrearUsuarios = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, { nombre: nombre, email: email, telefono: telefono })
        navigate('/')
    }
    return (
        <div>
            <h3>Agregar Usurario</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='from-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
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
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>

                <button type='submit' className='btn btn-primary'>Agregar</button>

            </form>
        </div>
    )
}

export default CrearUsuarios
