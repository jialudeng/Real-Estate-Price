/* eslint-disable */
import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import Tooltip from '../src/components/Tooltip';

describe('<Tooltip />', () => {

  
  it('calls componentDidMount', () => {
    sinon.spy(Tooltip.prototype, 'componentDidMount');
    const wrapper = mount(<Tooltip />);
    expect(Tooltip.prototype.componentDidMount).to.have.property('callCount', 1);
  });
});
