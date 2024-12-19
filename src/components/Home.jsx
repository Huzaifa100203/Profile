import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import { Link } from 'react-router-dom'

const Home = () => {
    
    const [users , setUsers] = useState([])
    useEffect(() => {
    fetch(`https://dummyjson.com/users`)
    .then((response ) => response.json())
    .then((data) => {
        // console.log(data)
        setUsers(data.users)
    })
    },[])
    console.log(users) 

    
  return (
<>
    <h1>Get Users</h1>
    {users?.map((user) => {
        return<>
        <img src={user.image} alt="" />
        
         <h1>{user.firstName} {user.lastName}</h1> 
         <h2>{user.company.title}</h2>
         
    <li><Link to={`/profile/${user.id}`}>profile</Link></li>
         
        </>
    })}
</>  )
}

export default Home