import React from 'react';
import Mainbanner from './components/Mainbanner';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Mainbanner/>
        <About/>
        <Footer/>
    </div>
  )
}

export default App;;
