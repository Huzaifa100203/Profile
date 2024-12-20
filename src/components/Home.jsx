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

<div className="bg-slate-600">
<h1 className='text-center text-5xl text-stone-300'>Get Users</h1>
</div>
    <div className=" p-4 size-full bg-slate-500 gap-14 flex  items-center flex-wrap">
   
    {users?.map((user) => {
        return<>
        <div className='w-2/12 h-60 p-3 text-center
        border border-slate-600 rounded-3xl bg-blue-200 
         flex flex-col justify-between items-center flex-wrap'>
            <img className='size-10' src={user.image} alt="" />
        
         <h1 className='text-3xl'>{user.firstName} {user.lastName}</h1> 
         <h2 className='text-2xl'>{user.company.title}</h2>
         
        <li className='list-none text-blue-700 hover:bg-blue-400 p-1 rounded-lg '><Link to={`/profile/${user.id}`}>View More</Link></li>
        </div>
        
         
        </>
    })}
    </div>

</> 
 )
}

export default Home