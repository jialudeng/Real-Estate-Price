/* eslint-disable */
import React from 'react';

import { TooltipDiv } from '../elements/Div';
import { TooltipSpan } from '../elements/Span';
import { ButtonI } from '../elements/I';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: this.props.top,
      left: this.props.left,
    };
    this.tooltipDiv = React.createRef();
  }

  componentDidMount() {
    const height = this.tooltipDiv.current.clientHeight;
    const width = this.tooltipDiv.current.clientWidth;
    this.setState({
      top: this.state.top - height - 15,
      left: this.state.left - (width / 2),
    });
  }

  render() {
    return (
      <TooltipDiv
        ref={this.tooltipDiv}
        top={this.state.top}
        left={this.state.left}
      >
        <ButtonI className="material-icons">close</ButtonI>
        <TooltipSpan>
          {this.props.children}
        </TooltipSpan>
      </TooltipDiv>
    );
  }
}

export default Tooltip;
