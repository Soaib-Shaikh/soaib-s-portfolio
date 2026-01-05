import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
