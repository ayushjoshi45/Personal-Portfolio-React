import React from 'react'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Project from './components/Project'
import Contact from './components/Contact'
import { Outlet, Route,Router,Routes } from 'react-router-dom'
function App() {
  return (
    <div className='bg-[#0B0B0B] h-full flex justify-center'>
      <div className='w-[90%]'>
      {<Header/>}
      {<Hero/>}
      {<Project/>}
      <Routes>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
    </div>
  )
}

export default App