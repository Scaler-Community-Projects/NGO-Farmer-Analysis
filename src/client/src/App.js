import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
   <div>
      <Navbar/>
        <div className="App-content"> 
          Content
        </div>
      <Footer/>
   </div>
  );
}

export default App;
