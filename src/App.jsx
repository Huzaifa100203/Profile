import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'

const App = () => {


  return (
<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
</>  )
}

export default App