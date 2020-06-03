import React from 'react';
import HomeSection from "./components/HomeSection";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <HomeSection />
      <PortfolioSection />
      <AboutSection />
      <footer>
        <p>Copyright &copy; David Fann Web Design Studio 2020 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
