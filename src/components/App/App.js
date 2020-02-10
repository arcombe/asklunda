import React from 'react';
import './App.css';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

function App() {
  return (
    <div className="app bg-light">
      <Navbar />

      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
