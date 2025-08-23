import React from 'react'
import Header from "./components/Header"
import Project from './components/Project'
import Contact from './components/Contact'
import {Route,Router,Routes } from 'react-router-dom'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  return (
    <div className='bg-[#0B0B0B] h-full flex justify-center'>
      <div className='w-[80%]'>
      {<Header/>}
      {<Project/>}
      {<Skills/>}
      {<About/>}
      {<Contact/>}
    </div>
    </div>
  )
}

export default App