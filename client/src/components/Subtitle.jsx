import React from 'react';
import Div from '../elements/Div.jsx';
import Span from '../elements/Span.jsx'


function Subtitle(props) {
  return (
    <Div.LeftDiv>
      <Span.TitleSpan large black onClick={props.onHistoryClick}><strong>Zestimate history</strong></Span.TitleSpan>
    </Div.LeftDiv>  
  )
}

export default Subtitle;
