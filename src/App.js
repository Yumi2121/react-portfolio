// import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



function App() {
  return (
    <>
    {/* <Routes>
      <Route path="" element={<Layout />} />
    </Routes> */}
    
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
