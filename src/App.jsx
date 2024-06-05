import React from 'react';
import Stopwatch from './Stopwatch';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Stopwatch />
      </div>
      <Footer />
    </div>
  );
}

export default App;
