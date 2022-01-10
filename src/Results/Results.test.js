import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

describe('Results component', () => {
  it('renders Results component without crashing', () => {
    shallow(<Results />)
  })
})