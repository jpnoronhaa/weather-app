import React from 'react';
import dateBuilder from './date-utils';
// import data from './data.json';

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Pesquisar..."
          />
        </div>
        <div className="location-box">
          <div className="location">Palmas Tocantins, Brasil</div>
          <div className="date">{dateBuilder(new Date(Date.now()))}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15ºC</div>
          <div className="weather">Ensolarado</div>
        </div>
      </main>
    </div>
  );
}

export default App;
