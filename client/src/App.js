import React from 'react';
import Stage from './components/Stage/Stage';
import Footer from './components/Footer/Footer';
import './App.css';
import './colors.css';

function App() {
  return (
    <div className = 'background'>
      <Stage/>
      <Footer/>
    </div>
  );
}

export default App;
