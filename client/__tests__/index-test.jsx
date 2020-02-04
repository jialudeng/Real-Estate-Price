import React from 'react';
import { shallow } from 'enzyme';

import Graph from '../src/components/index';
import Title from '../src/components/Title';
import Subtitle from '../src/components/Subtitle';

describe('<Graph />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Graph />
    ));
    expect(wrapper.contains([<Title />, <Subtitle />]));
  });
});
