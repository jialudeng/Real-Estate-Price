/* eslint-disable no-use-before-define */
import React from 'react';

import { PopupDiv, PopupTextDiv } from '../elements/Div';

function Popup(props) {
  const { left, soldPrice, soldDate, sold, date } = props;
  return (
    <PopupDiv left={left}>
      {sold
        && (
          <PopupTextDiv sold>
            <div>
              Sold for
            </div>
            <div>
              $
              {soldPrice}
            </div>
            <div>
              on&nbsp;
              {soldDate}
            </div>
          </PopupTextDiv>
        )}
      {!sold
        && (
          <PopupTextDiv>
            {date}
          </PopupTextDiv>
        )}
    </PopupDiv>
  );
}

export default Popup;
