/* eslint-disable */
import React from 'react';

import { LegendsDiv, FlexColDiv, FlexRowDiv, LegendImageDiv } from "../elements/Div";
import { LegendSpan } from '../elements/Span';
import Img from '../elements/Img';


function Legends(props) {
  const { city, neighborhood } = props;
  return (
    <LegendsDiv>
      <FlexColDiv>
        <FlexRowDiv>
          <LegendImageDiv>
            <Img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUiIGhlaWdodD0iNSIgdmlld0JveD0iMCAwIDc1IDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxsaW5lIHkxPSIyLjUiIHgyPSI3NSIgeTI9IjIuNSIgc3Ryb2tlPSIjMDA2QUZGIiBzdHJva2Utd2lkdGg9IjUiLz4KPC9zdmc+" />
          </LegendImageDiv>
          <LegendSpan>
            This home
          </LegendSpan>
        </FlexRowDiv>
        <FlexRowDiv>
          <LegendImageDiv>
            <Img />
          </LegendImageDiv>
          <LegendSpan bold>
            $1.1M
          </LegendSpan>
        </FlexRowDiv>
      </FlexColDiv>
      <FlexColDiv>
        <FlexRowDiv>
          <LegendImageDiv>
            <Img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUiIGhlaWdodD0iNSIgdmlld0JveD0iMCAwIDc1IDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDIuNUgzNSIgc3Ryb2tlPSIjMDU5RUMyIiBzdHJva2Utd2lkdGg9IjUiLz4KPHBhdGggZD0iTTQwIDIuNUg3NSIgc3Ryb2tlPSIjMDU5RUMyIiBzdHJva2Utd2lkdGg9IjUiLz4KPC9zdmc+" />
          </LegendImageDiv>
          <LegendSpan>
            {neighborhood}
          </LegendSpan>
        </FlexRowDiv>
        <FlexRowDiv>
          <LegendImageDiv>
            <Img />
          </LegendImageDiv>
          <LegendSpan bold>
            $900K
          </LegendSpan>
      </FlexRowDiv>
      </FlexColDiv>
      <FlexColDiv>
        <FlexRowDiv>
          <LegendImageDiv>
            <Img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUiIGhlaWdodD0iNSIgdmlld0JveD0iMCAwIDc1IDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDIuNUgxNSIgc3Ryb2tlPSIjNTQ1NDVBIiBzdHJva2Utd2lkdGg9IjUiLz4KPHBhdGggZD0iTTIwIDIuNUgzNSIgc3Ryb2tlPSIjNTQ1NDVBIiBzdHJva2Utd2lkdGg9IjUiLz4KPHBhdGggZD0iTTQwIDIuNUg1NSIgc3Ryb2tlPSIjNTQ1NDVBIiBzdHJva2Utd2lkdGg9IjUiLz4KPHBhdGggZD0iTTYwIDIuNUg3NSIgc3Ryb2tlPSIjNTQ1NDVBIiBzdHJva2Utd2lkdGg9IjUiLz4KPC9zdmc+" />
          </LegendImageDiv>
          <LegendSpan>
            {city}
          </LegendSpan>
        </FlexRowDiv>
        <FlexRowDiv>
          <LegendImageDiv>
            <Img />
          </LegendImageDiv>
          <LegendSpan bold>
            $1.5M
          </LegendSpan>
        </FlexRowDiv>
      </FlexColDiv>
    </LegendsDiv>
  )
};

export default Legends;



