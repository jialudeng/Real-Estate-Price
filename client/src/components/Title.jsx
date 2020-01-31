import React from 'react';
import Div from '../elements/Div.jsx'
import Span from '../elements/Span.jsx';
import P from '../elements/P.jsx'


function Title(props) {
  return (
    <div>
    <Div.CenterDiv>
      <Span.TitleSpan black onClick={props.onZestimateClick}>Zestimate<sup>®</sup></Span.TitleSpan>
    </Div.CenterDiv>
    <Div.CenterDiv>
      <P.PriceP>{props.price}</P.PriceP>
    </Div.CenterDiv>
    <Div.CenterDiv>
      <Span.TitleSpan onClick={props.onSalesClick}>Estimated sales range: {props.priceRange}</Span.TitleSpan>
    </Div.CenterDiv>
    </div>
  )
}

export default Title;