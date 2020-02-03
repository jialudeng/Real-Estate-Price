/* eslint-disable */
import React from 'react';

import { TooltipDiv } from '../elements/Div';
import { TooltipSpan } from '../elements/Span';


class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: this.props.triggerOffsetTop,
      left: this.props.left,
    };
  }

  componentDidMount() {
    const height = document.getElementById('tooltip').clientHeight - 20;
    this.setState({
      top: this.state.top - (height / 2),
    });
  }

  render() {
    return (
      <TooltipDiv
        id="tooltip"
        top={this.state.top}
        left={this.state.left}
      >
        <TooltipSpan>
          {this.props.children}
        </TooltipSpan>
      </TooltipDiv>
    );
  }
}

export default Tooltip;
