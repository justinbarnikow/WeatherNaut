import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage component', () => {
  it('renders HomePage component without crashing', () => {
    shallow(<HomePage />)
  })
})