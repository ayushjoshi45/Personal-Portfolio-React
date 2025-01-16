import React from 'react'
import Header from "./components/Header"
import Project from './components/Project'
import Contact from './components/Contact'
import { Outlet, Route,Router,Routes } from 'react-router-dom'
function App() {
  return (
    <div className='bg-[#0B0B0B] h-full flex justify-center'>
      <div className='w-[85%]'>
      {<Header/>}
      {<Project/>}
      {<Contact/>}
    </div>
    </div>
  )
}

export default App