import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageLoad from './ImageLoad';
import mountainRoad from "./assets/mountain-road.jpg";
import mountainRoadSmall from "./assets/mountain-road-small.jpg";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Progressive Load Image Using React Hooks</h1>
        <ImageLoad
          src={mountainRoad}
          placeholder={mountainRoadSmall}
        />
      </header>
    </div>
  );
}

export default App;
