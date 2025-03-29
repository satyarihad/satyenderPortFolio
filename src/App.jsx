import { useState, useEffect } from 'react';

import './App.css'
import  "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './page/Navbar'
import Footesection from './page/Footer'
import Aboutus from './page/AboutUs'
import Contactus from './page/ContactUs'
import Homepage from './component/Home';
import Product from './component/product';
import Skills from './page/Skills';
import Getintouch from './page/GetInTouch';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
    <div className={darkMode ? "dark-mode" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/getintouch" element={<Contactus />} />
        <Route path="/skills" element={<Skills />} />
        <Route path='/getintouch' element={<Getintouch />} />
      </Routes>
      
      <Aboutus />
      <Skills />  
      <Getintouch />
      
      <Footesection />

      </div>
    </>
  )
}

export default App;
