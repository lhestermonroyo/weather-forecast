import React, { useState } from 'react';
import Main from '../../components/Main';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const openWeatherKey = process.env.REACT_APP_OPEN_WEATHER_KEY;

const HomePage = () => {
  const { user } = useAuth0();

  const [search, setSearch] = useState('');

  const handleSearchWeather = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${openWeatherKey}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <div className='home-container'>
        <h2>{user?.name}</h2>
        <p>https://github.com/{user?.nickname}</p>
        <form
          className='search-container'
          onSubmit={(e) => handleSearchWeather(e)}
        >
          <div className='input-prepend-container'>
            <i className='fa fa-search fa-fw input-prepend' />
            <input
              type='text'
              name='search'
              placeholder='City'
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className='btn-default search-btn'>Display Weather</button>
        </form>
      </div>
    </Main>
  );
};

export default HomePage;
