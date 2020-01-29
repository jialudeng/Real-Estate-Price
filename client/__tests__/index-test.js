import React from 'react';
import { shallow } from 'enzyme';

import Graph from '../src/blocks/Card/index.jsx';
import Header from '../src/blocks/Card/Header.jsx'

describe('<Graph />', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Graph />).contains(      
      <Header>Home value</Header>
    )).toBe(true);
  })
})