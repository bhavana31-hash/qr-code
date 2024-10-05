import React, { useEffect, useState } from 'react'
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-regular-svg-icons';

export default function Weather() {
  let [weather, setWeather] = useState("")
  let [search, setSearch] = useState("Gwalior")

  let HandleClick = () => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8aae50703df3fda2e59d13fb49de355f`)
      // fetch(`https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=5bc1ed5ebcd94ab593db8dc28e225d2d&include=minutely`)

      .then((response) => response.json())
      .then((data) => {
        setWeather(data)
      })
  }

  useEffect(()=>{
    console.log(search);
    
    HandleClick()
  },[search])

  // console.log(weather)
  return (
    <div className='container' style={{ boxShadow: "10px 10px 10px 0px #ccc", borderRadius: "8px", backgroundColor: "#7cc0dc" , maxWidth: "500px"
    }}>
      <h3 className='  text-center '>Weather App</h3>
      <div className="search-bar">
        <input
          type="text"
          className="city-search"
          placeholder="Enter City Name.."
          name="query"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button className="btn btn-success m-2" onClick={() => HandleClick()}>Click</button>
      </div>
      <div className='dataDiv'>
        {weather.cod && weather.message && (
          <>
            <br />
            <br />
            <span className="error-message">
              <FontAwesomeIcon icon={faFrown} /> {"   "}
              <span style={{ fontSize: '20px' }}>{weather.cod}: {weather.message}</span>
            </span>
          </>
        )}
        {weather && weather.main ?
          <div>
            <div className="city-name">
              <h2>
                {weather.name}, <span>{weather.sys.country}</span>
              </h2>
            </div>
            <div className="date">
              <span></span>
            </div>
            <div className="icon-temp">
              <img
                className=""
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              {Math.round(weather.main.temp)}
              <sup className="deg">°C</sup>
            </div>
            <div className="des-wind">
              <p>{weather.weather[0].description.toUpperCase()}</p>
              <p>Wind Speed: {weather.wind.speed}m/s</p>
            </div>
          </div>
         : <div>Please wait while loading.....</div>}
      </div>
    </div>
  )
}
