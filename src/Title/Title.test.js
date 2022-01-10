import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('Title component', () => {
  it('renders Title component without crashing', () => {
    shallow(<Title />)
  })
})