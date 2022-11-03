import React from 'react'
// import Construction from './pages/Construction'
import Home from './pages/Home';
import Footer from './components/Footer';
import { Routes , Route } from "react-router-dom"



function App() {
  return (
    <>
    
    <Routes>
      <Route path ='/' element={<Home/>}/>
      {/* <Route path ='/construction' element={<Construction/>}/> */}
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
