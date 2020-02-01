/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Div from '../elements/Div';
import Span from '../elements/Span';
import P from '../elements/P';


function Title({
  onZestimateClick, price, onSalesClick, priceRange
}) {
  return (
    <div>
      <Div.CenterDiv>
        <Span.TitleSpan black onClick={onZestimateClick}>
        Zestimate
          <sup>®</sup>
        </Span.TitleSpan>
      </Div.CenterDiv>
      <Div.CenterDiv>
        <P.PriceP>{price}</P.PriceP>
      </Div.CenterDiv>
      <Div.CenterDiv>
        <Span.TitleSpan onClick={onSalesClick}>
        Estimated sales range:
          {priceRange}
        </Span.TitleSpan>
      </Div.CenterDiv>
    </div>
  );
}

export default Title;
