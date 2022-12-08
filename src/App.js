import React from 'react'
import { Routes , Route } from "react-router-dom"
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import Services from './pages/Services';
import Team from './pages/Team';
import Affiliates from './pages/Affiliates';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Confirmation from './pages/Confirmation';
import YouTube from './pages/YouTube';
import ConfirmationSP from './pages/ConfirmationSP';
import HomeSP from './pages/HomeSP';
import ServicesSP from './pages/ServicesSP';
import TeamSP from './pages/TeamSP';
import TestimonialsSP from './pages/TestimonialsSP';
import YouTubeSP from './pages/YouTubeSP';

function App() {



  
  return (
    <>
   
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/team' element={<Team/>}/>
      <Route path ='/testimonials' element={<Testimonials/>}/>
      <Route path ='/services-and-workshops' element={<Services/>}/>
      <Route path ='/affiliates' element={<Affiliates/>}/>
      <Route path ='/contact-confirmation' element={<Confirmation/>}/>
      <Route path ='/the-debt-lifeline' element={<YouTube/>}/>
      <Route path='*' element={<NotFound />}/>

      <Route path ='/es' element={<HomeSP/>}/>
      <Route path='/es/contact-confirmation' element={<ConfirmationSP/>}/>
      <Route path='/es/services-and-workshops' element={<ServicesSP/>}/>
      <Route path='/es/team' element={<TeamSP/>}/>
      <Route path='/es/testimonials' element={<TestimonialsSP/>}/>
      <Route path ='/es/the-debt-lifeline' element={<YouTubeSP/>}/>

    </Routes>
    <Contact/>

    
    

    </>
  );
}

export default App;
