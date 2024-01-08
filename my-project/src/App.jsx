import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar2 from './components/Navbar2'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
     <Navbar2/>
    <Routes>
      <Route id="home" path="home" element={<Home />}/>
      <Route id="about" path="about" element={<About />}/>
      <Route id="courses" path="courses" element={<Courses />}/>
      <Route id="reviews" path="reviews" element={<Reviews />}/>
      <Route id="contact" path="contact" element={<Contact />}/>
    </Routes>
  

    <Footer />
    </div>
  )
}

export default App