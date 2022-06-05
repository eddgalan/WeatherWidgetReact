import React, { useState, useEffect } from 'react';
import WeatherForm from './weatherForm.jsx';
import WeatherMainInfo from './weatherMainInfo.jsx';
import styles from './weatherApp.module.css';

function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect( () => {
    loadInfo();
  }, [] );

  useEffect( () => {
    document.title = `Weather | ${ weather ?.location.name ?? "" }`;
  }, [weather] );

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  async function loadInfo(city = 'london') {
    try {
      const request = await fetch(
        `${ process.env.REACT_APP_URL }?key=${ process.env.REACT_APP_KEY }&q=${ city }`
      );
      const response = await request.json();
      console.log(response);
      setWeather(response);
    } catch(error) {

    }
  }

  return (
    <div className={ styles.weatherContainer }>
      <WeatherForm onChangeCity={ handleChangeCity } />
      <WeatherMainInfo weather={ weather }/>
    </div>
  );
}

export default WeatherApp;
