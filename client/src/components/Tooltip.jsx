import React from 'react';

import Div from '../elements/Div';
import Span from '../elements/Span';


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
      <Div.TooltipDiv
        id="tooltip"
        top={this.state.top}
        left={this.state.left}
      >
        <Span.TooltipSpan>
          {this.props.children}
        </Span.TooltipSpan>
      </Div.TooltipDiv>
    );
  }
}

export default Tooltip;
