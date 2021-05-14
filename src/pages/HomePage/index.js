import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Main from '../../components/Main';
import { useAuth0 } from '@auth0/auth0-react';

const HomePage = () => {
  const { user } = useAuth0();

  const history = useHistory();

  const [search, setSearch] = useState('');

  useEffect(() => {
    document.title = 'Home | Weather Forecast';
  }, []);

  const handleSearchWeather = async (e) => {
    e.preventDefault();

    return history.push(`/weather/${search}`);
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
          <button
            className='btn-default search-btn'
            disabled={search ? false : true}
          >
            Display Weather
          </button>
        </form>
      </div>
    </Main>
  );
};

export default HomePage;
