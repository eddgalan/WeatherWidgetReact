import React, { useState } from 'react';

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
    <form onSubmit={ handleSubmit }>
      <input type="text" onChange={ typeCity } />
    </form>
  );

}

export default WeatherForm;
