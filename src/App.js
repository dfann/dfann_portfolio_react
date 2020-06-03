import React from 'react';
import logo from './logo.svg';
import HomeSection from "./components/HomeSection";
import PortfolioSection from "./components/PortfolioSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <HomeSection />
      <PortfolioSection />
    </div>
  );
}

export default App;
