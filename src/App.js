import React from 'react'
// import Construction from './pages/Construction'
import Home from './pages/Home';
import Footer from './components/Footer';
import Testimonials from './pages/Testimonials';
import Services from './pages/Services';
import { Routes , Route } from "react-router-dom"



function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/testimonials' element={<Testimonials/>}/>
      <Route path ='/services' element={<Services/>}/>
      {/* <Route path ='/construction' element={<Construction/>}/> */}
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
