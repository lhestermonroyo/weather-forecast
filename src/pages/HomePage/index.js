import React from 'react';
import Main from '../../components/Main';
import { useAuth0 } from '@auth0/auth0-react';

const HomePage = () => {
  const { user } = useAuth0();

  return (
    <Main>
      <div className='home-container'>
        <h2>{user?.name}</h2>
        <p>https://github.com/{user?.nickname}</p>
        <form className='search-container'>
          <div className='input-prepend-container'>
            <i className='fa fa-search fa-fw input-prepend' />
            <input type='text' name='search' placeholder='City' />
          </div>
          <button className='btn-default search-btn'>Display Weather</button>
        </form>
      </div>
    </Main>
  );
};

export default HomePage;
