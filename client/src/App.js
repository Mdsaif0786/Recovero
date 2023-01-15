
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import { Routes, Route } from 'react-router-dom';
import Billing from './Components/Billing/Billing';
import Signup from './Components/pages/Signup';
import Login from './Components/pages/Login';
import GetMember from './Components/pages/GetMember';
import Procted from './Components/pages/Procted';
// import Home from './Components/Home/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/about' element={<About />} />
        <Route path='/billing' element={<Procted  component ={<Billing/>}/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/getMember' element={<GetMember/>}/>


      </Routes>



    </>
  );
}

export default App;
