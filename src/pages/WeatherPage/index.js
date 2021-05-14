import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import Main from '../../components/Main';

const openWeatherKey = process.env.REACT_APP_OPEN_WEATHER_KEY;

const WeatherPage = (props) => {
  const { match } = props;

  const history = useHistory();

  const [data, setData] = useState(null);
  const [error, setError] = useState({ status: null, message: '' });

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${match.params.city}&units=imperial&appid=${openWeatherKey}`
      );

      setData(res.data);
    } catch (error) {
      setError({
        status: error.response.status,
        message: error.response.data?.message,
      });
    }
  };

  return (
    <Main>
      <div className='weather-container'>
        {!data ? (
          <h2 className='error-msg'>
            Error {error.status}: {error.message}
          </h2>
        ) : (
          <React.Fragment>
            <h2>
              {data?.name}, {data?.sys.country}
            </h2>
            <div className='card-group'>
              <div className='card'>
                <div className='card-content'>
                  <p>Date (mm/dd/yyyy)</p>
                  <h1>
                    <Moment format='MM/DD/YYYY'>{new Date()}</Moment>
                  </h1>
                </div>
              </div>
              <div className='card'>
                <div className='card-content'>
                  <p>Temp(F)</p>
                  <h1>{data?.main.temp} &#730;</h1>
                </div>
              </div>
              <div className='card'>
                <div className='card-content'>
                  <p>Description</p>
                  <h1>{data?.weather[0].description}</h1>
                </div>
              </div>
              <div className='card'>
                <div className='card-content'>
                  <p>Main</p>
                  <h1>{data?.weather[0].main}</h1>
                </div>
              </div>
              <div className='card '>
                <div className='card-content'>
                  <p>Humidity</p>
                  <h1>{data?.main.humidity}</h1>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
        <button
          className='btn-default weather-btn'
          onClick={() => history.push('/home')}
        >
          Back
        </button>
      </div>
    </Main>
  );
};

export default WeatherPage;
