import React from 'react';

import { PopupDiv, PopupTextDiv } from '../elements/Div';

function Popup(props) {
  const { left, soldPrice, soldDate } = props;
  return (
    <PopupDiv left={left}>
      <PopupTextDiv>
        <div>
          Sold for
        </div>
        <div>${generateRange(soldPrice)}</div>
        <div>
          on {soldDate}
        </div>
      </PopupTextDiv>
    </PopupDiv>
  );
}

function generateRange(number) {
  if (number < 1000000) {
    return parseInt(number / 1000, 10) + 'K';
  } return (parseInt(number / 10000, 10) / 100).toFixed(2) + 'M';
}

function addComa(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default Popup;
