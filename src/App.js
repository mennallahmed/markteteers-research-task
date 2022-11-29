import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home/Home";
import Favorite from './pages/Favorite/Favorite';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<> <Home/> </>}/>
        <Route path='/home' element={<> <Home/> </>}/>
        <Route path='/favorites' element={<> <Favorite/> </> }/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/book-details/:id' element={<Home/> }/>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
