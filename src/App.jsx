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
      <section id="project">{<Project/>}</section>
      <section id="skills">{<Skills/>}</section>
      <section id="about">{<About/>}</section>
      <section id="contact">{<Contact/>}</section>
    </div>
    </div>
  )
}

export default App