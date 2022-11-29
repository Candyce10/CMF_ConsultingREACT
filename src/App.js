import React from 'react'
// import Construction from './pages/Construction'
import Home from './pages/Home';
import Footer from './components/Footer';
import Testimonials from './pages/Testimonials';
import Services from './pages/Services';
import Team from './pages/Team';
import Affiliates from './pages/Affiliates';
import Contact from './components/Contact';
import { Routes , Route } from "react-router-dom"
import NotFound from './pages/NotFound';
import Confirmation from './components/Confirmation';


function App() {



  
  return (
    <>
   
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/team' element={<Team/>}/>
      <Route path ='/testimonials' element={<Testimonials/>}/>
      <Route path ='/servicesandworkshops' element={<Services/>}/>
      <Route path ='/affiliates' element={<Affiliates/>}/>
      <Route path ='/contactconfirmation' element={<Confirmation/>}/>
      <Route path='*' element={<NotFound />}/>
      {/* <Route path ='/construction' element={<Construction/>}/> */}
    </Routes>
    <Footer/>
    <Contact/>
    </>
  );
}

export default App;
