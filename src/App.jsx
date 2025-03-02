import './App.css'
import  "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './page/Navbar'
import Footesection from './page/Footer'
import Aboutus from './page/AboutUs'
import Contactus from './page/ContactUs'
import Homepage from './component/Home';

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footesection />
    </>
  )
}

export default App;
