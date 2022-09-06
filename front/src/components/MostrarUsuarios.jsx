import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const MostrarUsuarios = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        getAllUsuarios()

    }, [])

    const getAllUsuarios = async () => {
        const response = await axios.get(`${endpoint}/usuarios`)
        setUsuarios(response.data)
    }
    const deleteUsuarios = async (id) => {
        await axios.delete(`${endpoint}/usuario/${id}`)
        getAllUsuarios()
    }

    return (
        <div>
            <table className='table table-striped'>
                <thead className='bg-secondary text-white'>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.telefono}</td>
                            <td>
                               {/*  <Link to={`/edit/${usuario.id}`} className='btn btn-info'>Editar</Link> */}
                                <button onClick={() => deleteUsuarios(usuario.id)} className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/create" className='btn btn-primary text-white'>Crear</Link>
            </div>
        </div>

    )
}

export default MostrarUsuarios
