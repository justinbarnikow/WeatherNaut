import React from 'react';
import { shallow } from 'enzyme';
import WeatherCard from './WeatherCard';

describe('WeatherCard component', () => {
  it('renders WeatherCard component without crashing', () => {
    shallow(<WeatherCard />)
  })
})