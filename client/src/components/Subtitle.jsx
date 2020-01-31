/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Div from '../elements/Div';
import Span from '../elements/Span';


function Subtitle({ onHistoryClick }) {
  return (
    <Div.LeftDiv>
      <Span.TitleSpan large black onClick={onHistoryClick}><strong>Zestimate history</strong></Span.TitleSpan>
    </Div.LeftDiv>
  );
}

Subtitle.defaultProps = {
  onHistoryClick: undefined,
};

Subtitle.propTypes = {
  onHistoryClick: PropTypes.func,
};

export default Subtitle;
