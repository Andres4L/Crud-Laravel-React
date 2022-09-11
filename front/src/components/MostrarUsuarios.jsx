import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const MostrarUsuarios = () => {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const LogOut =() =>{
            localStorage.removeItem('token')
            navigate('/')
           
    }

    useEffect(() => {

        getAllUsuarios()

    }, [])

    const getAllUsuarios = async () => {
        const response = await axios.get(`${endpoint}/usuarios`)
        setUsers(response.data)
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
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                               {/*  <Link to={`/edit/${usuario.id}`} className='btn btn-info'>Editar</Link> */}
                                <button onClick={() => deleteUsuarios(user.id)} className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/registro" className='btn btn-primary text-white'>Registrar Usuario</Link>
                <br />
                <button  onClick={LogOut} className='btn btn-primary text-white mt-3'>Logout</button>
             

            </div>
        </div>

    )
}

export default MostrarUsuarios
