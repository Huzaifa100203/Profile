import React, { useState, useEffect } from 'react'
import { useParams  } from 'react-router-dom'

const Profile = () => {
    const {id} = useParams()
    const [user , setUsers] = useState([])
        useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
        .then((response ) => response.json())
        .then((data) => {
            console.log(data)
            setUsers(data)
        })
        },[])
  return (
    <>
      <div className="main-container">
      <div className="container">
        <img src={user.image} alt="" />
        <h1>{user.firstName} {user.lastName}, {user.age}</h1>
            <h2> {user.company.title}</h2>
            <h4>{user.address.city}, {user.address.country}</h4>
            <label htmlFor="">Contact Me</label>
            <h3>{user.email}</h3>
        
        
       </div>
      </div>
    </>
  )
}

export default Profile