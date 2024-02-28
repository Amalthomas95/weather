import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from "../Assets/search (2).png"
import weather_icon from "../Assets/cloudy (1).png"
import rain_icon from "../Assets/cloudy (1).png"
import background_icon from "../Assets/rainy-day-city-with-car-road-blurry-background_81048-11362.avif"
import windy_icon from "../Assets/wind-solid.svg"
import humidity_icon from "../Assets/humidity.png"
import snowy_icon from "../Assets/snowy.png"
function Weather() {

let api_key ="f30d5426fd3bf7443e9956f5553a92d1"

const [wicon,setWicon]= useState(rain_icon);

const search = async () => {

const element =document.getElementsByClassName("CityInput")
if(element[0].value==="")
{
    return 0;
}
let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

let response = await fetch(url);
let data = await response.json();
const humidity=document.getElementsByClassName("humidity-percent")
const wind =document.getElementsByClassName("wind-rate")
const temperature=document.getElementsByClassName("weather-temp")
const location= document.getElementsByClassName("weather-location")

humidity[0].innerHTML=data.main.humidity+" %";
wind[0].innerHTML=Math.floor(data.wind.speed)+" Km/h";
temperature[0].innerHTML=Math.floor(data.main.temp)+"°c";
location[0].innerHTML=data.name;

if(data.weather[0].icon==="01d" || data.weather[0]==="01n"){
    setWicon(weather_icon);
}
else if(data.weather[0].icon==="02d" || data.weather[0]==="02n"){
setWicon(weather_icon)
}
else if(data.weather[0].icon==="03d" || data.weather[0]==="03n"){
    setWicon(rain_icon)
    }
    else if(data.weather[0].icon==="04d" || data.weather[0]==="04n"){
        setWicon(rain_icon)
        }
        else if(data.weather[0].icon==="09d" || data.weather[0]==="09n"){
            setWicon(rain_icon)
            }
            else if(data.weather[0].icon==="010d" || data.weather[0]==="010n"){
                setWicon(rain_icon)
                }
                else if(data.weather[0].icon==="13d" || data.weather[0]==="13n"){
                    setWicon(snowy_icon)
                    }
                    else{
                        setWicon(weather_icon)
                    }

}

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className="CityInput" placeholder='Search' />
<div className="search-icon"onClick={()=>{search()}}>
    <img src={search_icon} height={40} alt="" />
</div>
            </div>
            <div className="weather-image">
                <img src={weather_icon} height={100}alt="" />
            </div>
            <div className="weather-temp">
                24°c
            </div>
            <div>
                <div className="weather-location">London</div>
                <div className="data-container">
                    <div className="element">
                        <img src={humidity_icon} height={25} alt="" className='icon' />
                        <div className='data'>
                            <div className="humidity-percent">64%</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>
                    <div className="element">
                        <img src={windy_icon} height={25} alt="" className='icon' />
                        <div className='data'>
                            <div className="wind-rate">18 km/h</div>
                            <div className="text">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Weather