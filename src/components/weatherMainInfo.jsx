import React from 'react';

function WeatherMainInfo( {weather} ) {
  return(
    <div>
      <div> { weather?.location.name } </div>
      <div> { weather?.location.country } </div>
      <div>
        <div>
          <img
            src={`https:${weather?.current.condition.icon}`}
            width="128"
            alt={ weather?.current.condition.text }
          />
        </div>
        <div>
          <div> { weather?.current.condition.text } </div>
          <div> { weather?.current.temp_c }° </div>
        </div>
      </div>
      <iframe
        title="Mapa"
        src={ `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15045.755209485375!2d${ weather?.location.lon }!3d${ weather?.location.lat }!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1654375539383!5m2!1ses-419!2smx` }
        width="600"
        height="450"
        style={{ border:0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default WeatherMainInfo;
