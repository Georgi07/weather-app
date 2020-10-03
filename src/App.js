import React, {useState} from 'react';

import './App.css';
const api = {
  key: "773eb64fa4a5cec966b88f5a806ff429",
  base:  "https://api.openweathermap.org/data/2.5/"
};

function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const search = evt => {
       if (evt.key === "Enter") {
           fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
               .then(res => res.json())
               .then(result => {
                   setWeather(result);
                   setQuery('');
                   console.log(result)
               })
       }
    };
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
    };
    const isHot = () => {
        return (weather.main.temp - 273.15) > 16 ? 'app-warm' : 'app';
    };
  return (
    <div className={(typeof weather.main != "undefined") ? isHot() : 'app'}>
         <main>
               <div className="search-box">
                  <input
                      type="text"
                      className="search-bar"
                      placeholder="Search..."
                      onChange={e => setQuery(e.target.value)}
                      value={query}
                      onKeyPress={search}/>
               </div>
             {(typeof weather.main != 'undefined') ? (
              <div>
                 <div className="location-box">
                     <div className="location">{weather.name}, {weather.sys.country}</div>
                     <div className="date">{dateBuilder(new Date())}</div>
                 </div>
                 <div className="weather-box">
                 <div className="temp">{Number(Math.round(weather.main.temp - 273.15))}°C</div>
                 <div className="weather">{weather.weather[0].main}</div>
                 </div>
              </div>
             ) : (<h1 className="slogan">Welcome to my weather app :)</h1>)}
         </main>
    </div>
  );
}

export default App;
