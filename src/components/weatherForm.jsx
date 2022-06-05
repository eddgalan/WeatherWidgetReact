import React, { useState } from 'react';
import styles from './weatherForm.module.css';

function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState('');

  function typeCity(event) {
    const value = event.target.value;
    if( value !== '' ) {
      setCity(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onChangeCity(city);
  }

  return (
    <form className={ styles.container } onSubmit={ handleSubmit }>
      <input type="text" className={ styles.input } onChange={ typeCity } placeholder="Type a city..."/>
    </form>
  );

}

export default WeatherForm;
