import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"
import React from 'react';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <div className='Contents'>
        <Navbar />
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;