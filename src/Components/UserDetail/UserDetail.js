import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'

const UserDetail = ({match}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
 useEffect(() => {
   axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
.then(res=>{setUser(res.data);setLoading(false)})
        
   
 }, [match.params.id])
 if (loading){
     return <Spinner animation="border" variant="dark" />
 }
    return (
        <div>
                 <h1> {user.name}</h1>
            <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        </div>
    )
}

export default UserDetail


