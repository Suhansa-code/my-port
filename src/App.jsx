import './App.css';
import React from 'react';
import MainPage from './mainpage';
import './index.css';
import StarCanvas from './components/StarCanvas';
import Contact from './components/Contact';
import Interests from './components/Interest';
import Education from './components/Education';

function App() {


  return (
    
    <div className="relative min-h-screen w-full bg-black">
    {/* Starry Canvas */}
    <StarCanvas />

    <div className="App">
     

      {/* Main Page */}
      <MainPage />

      <Education />

      {/* Interests Section */}
      <Interests />
      {/* Projects Section */}

      <Contact />
     
        

    </div>

    </div>
    
  );
}

export default App;
