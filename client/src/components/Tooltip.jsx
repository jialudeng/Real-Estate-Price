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
    this.tooltipDiv = React.createRef();
  }

  componentDidMount() {
    const height = this.tooltipDiv.current.clientHeight - 20;
    this.setState({
      top: this.state.top - (height / 2),
    });
  }

  render() {
    return (
      <TooltipDiv
        ref={this.tooltipDiv}
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
