/* import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/usuario/'

const EditarUsuarios = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()


    const update = async (e) => {
        e.preventDefault()
        axios.put(`${endpoint}${id}`,{
            nombre:nombre,
            email:email,
            telefono:telefono
        })
        navigate('/create')
    }

    useEffect(()=>{
        const getUsuarioById = async ()=>{
           const response = await axios.get(`${endpoint}${id}`)
           setNombre(response.data.nombre)
           setEmail(response.data.email)
           setTelefono(response.data.telefono)
        }

        getUsuarioById()
    },[])
    return (
        <div>
<h3>Editar Usurario</h3>
            <form onSubmit={update}>
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

export default EditarUsuarios
 */