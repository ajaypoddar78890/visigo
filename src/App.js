import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newlocations from './components/Newlocations';
import Search from './components/Search';
import Selects from './components/Selects';
 

function App() {
  return (
    <div  >
      <Navbar/>
      <Hero/>
      < Newlocations/>
      <Search/>
      <Selects/>
      <Footer/>
    </div>
  );
}

export default App;
