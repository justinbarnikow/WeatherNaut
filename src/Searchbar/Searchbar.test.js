import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from './Searchbar';

describe('Searchbar component', () => {
  it('renders Searchbar component without crashing', () => {
    shallow(<Searchbar />)
  })
})