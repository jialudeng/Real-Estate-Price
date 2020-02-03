/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { CenterDiv } from '../elements/Div';
import { TitleSpan } from '../elements/Span';
import { PriceP } from '../elements/P';


function Title({
  onZestimateClick, price, onSalesClick, priceRange
}) {
  return (
    <div>
      <CenterDiv>
        <TitleSpan black onClick={onZestimateClick}>
        Zestimate
          <sup>®</sup>
        </TitleSpan>
      </CenterDiv>
      <CenterDiv>
        <PriceP>{price}</PriceP>
      </CenterDiv>
      <CenterDiv>
        <TitleSpan onClick={onSalesClick}>
        Estimated sales range:&nbsp;
          <strong>{priceRange}</strong>
        </TitleSpan>
      </CenterDiv>
    </div>
  );
}

export default Title;
