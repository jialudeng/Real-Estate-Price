import React from 'react';
import { shallow } from 'enzyme';

import Graph from '../src/components/index';

describe('<Graph />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Graph>
        <div className="unique" />
      </Graph>
    ));
    expect(wrapper.contains(<div className="unique" />)).toBe(true);
  });
});
