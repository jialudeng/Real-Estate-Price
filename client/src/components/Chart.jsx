/* eslint-disable */
import React from 'react';

import Legends from './Legends';

import { ChartDiv, XAxisDiv, XTickDiv, YAxisDiv, YTickDiv } from '../elements/Div';
import Svg from '../elements/Svg';
import { CityPath, NeighborhoodPath, PropertyPath } from '../elements/Path';

function Chart(props) {
  const {city, neighborhood, property} = props.data;
  let width = 468;
  let height = 211;
  let xMax = 131; 
  let yMax = 2000000;

  let x = val => val / xMax * width;
  let y = val => height - val / yMax * height;
  let xTicks = [2010, 2012, 2014, 2016, 2018, 2020];
  let yTicks = ['', '$500K', '$1M', '$1.5M', '$2M'].reverse();

  function makeD(data) {
    return `M${x(0)} ${y(data[0])} ${data.slice(1).map((d, i) => {
      return `L${x(i)} ${y(d)}`;
    }).join(' ')}`;
  }; 

  return (
    <div>
    <Legends city={city.name} neighborhood={neighborhood.name} />
    <ChartDiv width={width.toString()} height={height.toString()}>
      <Svg width={width.toString()} height={height.toString()}>
          <CityPath d={makeD(city.price)} />
          <NeighborhoodPath d={makeD(neighborhood.price)} />
          <PropertyPath d={makeD(property.price)} />
      </Svg>
      <XAxisDiv>
          {xTicks.map(v => <XTickDiv data-value={v} key={v}/>)}
      </XAxisDiv>
      <YAxisDiv>
          {yTicks.map(v => <YTickDiv data-value={v} key={v}/>)}
      </YAxisDiv>
    </ChartDiv>
    </div>
  );
}

export default Chart;
