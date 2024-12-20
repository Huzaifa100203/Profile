import React, { useState, useEffect } from 'react'
import { useParams  } from 'react-router-dom'


const Profile = () => {
    const {id} = useParams()
    const [user , setUsers] = useState([])
        useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
        .then((response ) => response.json())
        .then((data) => {
          setUsers(data)
          console.log(data.company.title)
        })
        },[])
  return (
    <>
      <div className="bg-blue-300 h-screen flex justify-center items-center">
      <div className=" bg-white w-4/12 h-5/6
       border-red-500 border rounded-3xl 
       flex justify-evenly items-center flex-col gap-4 
       hover:scale-110  transition-transform duration-500 ">
        <img className='object-cover size-30 border  border-green-800 rounded-full ' src={user?.image} alt="" />
        <h1 className='text-5xl'>{user?.firstName} {user?.lastName}, {user?.age}</h1>
            <h2 className='text-3xl'> {user?.company?.title}</h2>
            {/* <h4 className='text-3xl'>{user?.address?.city}, {user?.address?.country}</h4> */}
            <label htmlFor="" className='text-2xl bg-slate-400 text-white rounded-3xl p-2 mt-3 hover:bg-slate-600'>Contact Me</label>
            <h3 className='text-3xl'>{user?.email}</h3>
        
        
       </div>
      </div>
    </>
  )
}

export default Profile