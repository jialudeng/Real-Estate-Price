import React from 'react';
import Tooltip from './Tooltip';
import A from '../elements/A';
import { IconDiv, FlexRowDiv } from '../elements/Div';
import { IconSpan } from '../elements/Span';
import I from '../elements/I';

function ZestimateTooltip(props) {
  const { triggerOffsetTop, tooltipLeft, updateZestimate } = props;
  return (
    <Tooltip
      triggerOffsetTop={triggerOffsetTop}
      left={tooltipLeft}
    >
    The Zestimate is Zillow&quot;s best estimate of this home&quot;s market value. It is not an appraisal and it should be used as a starting point.
      <A href="https://www.zillow.com/zestimate/">&nbsp;Learn more</A>
  .
      <br />
      <br />
  If your home facts are wrong, your Zestimate may be incorrect.
      <A href={updateZestimate}>&nbsp;Update them here</A>
  .
      <br />
      <br />
  The Zestimate incorporates multiple data models and responds to factors like:
      <br />
      <br />
      <FlexRowDiv>
        <IconDiv>
          <I className="material-icons">directions_walk</I>
          <IconSpan>
          Neighborhood
            <br />
          details
          </IconSpan>
        </IconDiv>
        <IconDiv>
          <I className="material-icons">remove_red_eye</I>
          <IconSpan>Popularity on Zillow</IconSpan>
        </IconDiv>
        <IconDiv>
          <I className="material-icons">house</I>
          <IconSpan>Home facts</IconSpan>
        </IconDiv>
        <IconDiv>
          <I className="material-icons">calendar_today</I>
          <IconSpan>Listing price</IconSpan>
        </IconDiv>
      </FlexRowDiv>
    </Tooltip>
  );
}

export default ZestimateTooltip;
