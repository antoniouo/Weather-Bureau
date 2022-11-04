import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [city, setCity] = useState('');

  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c7616da4b68205c2f3ae73df2c31d177`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCity('');
        });
    }
  };

  const format_date = (d) => {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className={(typeof weather.main !== 'undefined') ? ((weather.main.temp > 16) ? 'app warm' : 'app cold') : 'app'}>
      <main>
        <div className="post-header">
          <div className="post-title">
            <h2>
              Погодное информбюро
            </h2>
          </div>
          <div className="border">
            <span />
            <span />
          </div>
        </div>
        <div className="container2">
          <motion.div className="search-box" style={{ x: -500 }} animate={{ x: 0 }}>
            <input
              type="text"
              className="search-bar"
              placeholder="Название города..."
              onChange={(e) => setCity(e.target.value)}
              value={city}
              onKeyPress={search}
            />
          </motion.div>
        </div>
        {(typeof weather.main !== 'undefined') ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}
                ,
                {' '}
                {weather.sys.country}
              </div>
              <div className="date">{format_date(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}
                °c
              </div>
              <div className="weather">{weather.weather[0].main}</div>
              <div id="icon">
                <img id="wicon" src={`${`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}`} alt="Weather icon" />
              </div>
            </div>
          </div>
        ) : ('')}
        <div />
        <div className="conteiner">
          <div className="fish">
            <div className="eye" />
            <div className="body" />
            <div className="tail" />
            <div className="fin" />
            <div className="backfin" />
            {' '}
          </div>
        </div>
      </main>
    </div>
  );
}
