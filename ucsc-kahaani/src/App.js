// App.js
import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import VideoBackground from './components/videoBackground/VideoBackground';
import About from './components/about/About';

function App() {
  return (
    <div className="UCSC Kahaani">
      <VideoBackground/>
      <Navbar/>
      <About/>
    </div>
  );
}

export default App;
