/* eslint-disable */
import React from 'react';

import Legends from './Legends';
import Popup from './Popup';

import { ChartDiv, XAxisDiv, XTickDiv, YAxisDiv, YTickDiv } from '../elements/Div';
import Svg from '../elements/Svg';
import { CityPath, NeighborhoodPath, PropertyPath, LinePath } from '../elements/Path';
import Image from '../elements/Image';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 468,
      height: 211,
      indexMax: 131,
      priceMax: 2000000,
      soldPrice: '',
      soldDate: '',
      soldIndex: 0,
      showSold: false,
      showPopup: false,
      showLine: false,
      popupLeft: 0,
      xCoordinate: 0,
      propertyPrices: [],
      neighborhoodPrices: [],
      cityPrices: [],
      propertyPrice: 'NA',
      neighborhoodPrice: 'NA',
      cityPrice: 'NA',
    };
    this.svgDiv = React.createRef();
    // this.handleSoldMouse = this.handleSoldMouse.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount() {
    const [soldPrice, soldDate] = this.props.data.property.sold;
    this.setState({
      soldPrice: generateRange(soldPrice),
      soldDate: calendar[soldDate],
      soldIndex: soldDate,
      propertyPrices: this.props.data.property.price,
      neighborhoodPrices: this.props.data.neighborhood.price,
      cityPrices: this.props.data.city.price,
    });
  }

  handleMouseOver(e) {
    const { width, indexMax, propertyPrices, neighborhoodPrices, cityPrices } = this.state;
    const xCoordinate = e.clientX - this.svgDiv.current.offsetLeft;
    const currentIndex = Math.floor((xCoordinate / width) * indexMax)
    if (currentIndex < this.state.soldIndex + 3 && currentIndex > this.state.soldIndex - 3) {
      this.setState({
        showPopup: false,
        showSold: true,
      })
    } else {
      this.setState({
        showPopup: true,
        showSold: false,
      })
    }
    this.setState({
      showLine: true,
      xCoordinate,
      popupLeft: xCoordinate - 55,
      propertyPrice: `$${generateRange(propertyPrices[currentIndex])}`,
      neighborhoodPrice: `$${generateRange(neighborhoodPrices[currentIndex])}`,
      cityPrice: `$${generateRange(cityPrices[currentIndex])}`,
    })
  }

  handleMouseLeave() {
    this.setState({
      showPopup: false,
      showLine: false,
      showSold: false,
      propertyPrice: 'NA',
      neighborhoodPrice: 'NA',
      cityPrice: 'NA',
    })
  }

  render() {
    const { city, neighborhood, property } = this.props.data;
    const { width, height, indexMax, priceMax, showSold, popupLeft, soldPrice, soldDate, showLine, xCoordinate, showPopup, propertyPrice, neighborhoodPrice, cityPrice } = this.state;

    const x = index => (index / indexMax) * width;
    const getIndex = x => Math.floor((x / width) * indexMax);
    const y = price => height - (price / priceMax) * height;
    // const valY = y => priceMax * (height - y) / height;
    const xTicks = [2010, 2012, 2014, 2016, 2018, 2020];
    const yTicks = ['', '$500K', '$1M', '$1.5M', '$2M'].reverse();

    function makeD(data) {
      return `M${x(0)} ${y(data[0])} ${data.slice(1).map((d, i) => {
        return `L${x(i)} ${y(d)}`;
      }).join(' ')}`;
    }

    return (
      <div>
        <Legends city={city.name} neighborhood={neighborhood.name} propertyPrice={propertyPrice} neighborhoodPrice={neighborhoodPrice} cityPrice={cityPrice}/>
        <ChartDiv ref={this.svgDiv} width={width.toString()} height={height.toString()}>
          <Svg onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} width={width.toString()} height={height.toString()}>
            {showLine && <LinePath d={`M${xCoordinate} 0 L${xCoordinate} 211`} stroke="black" />}
            <CityPath d={makeD(city.price)} />
            <NeighborhoodPath d={makeD(neighborhood.price)} />
            <PropertyPath d={makeD(property.price)} />
            <Image x={x(property.sold[1]) - 9 } y={y(property.sold[0]) - 9} href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgOTggOTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjQ5IiBjeT0iNDkiIHI9IjQ5IiBmaWxsPSIjZmZmIi8+CjxwYXRoIGQ9Im00OSA5OGMtMjcuMDYzIDAtNDktMjEuOTM3LTQ5LTQ5czIxLjkzNy00OSA0OS00OSA0OSAyMS45MzcgNDkgNDktMjEuOTM3IDQ5LTQ5IDQ5em00LjktMjQuNWg0LjljOC4xMTkzIDAgMTQuNy02LjU4MDcgMTQuNy0xNC43cy02LjU4MDctMTQuNy0xNC43LTE0LjdoLTE5LjY0OWMtMi43MDQ4IDAtNC45LTIuMTk1Mi00LjktNC45czIuMTk1Mi00LjkgNC45LTQuOWgyOS40NDl2LTkuOGgtMTQuN3YtOS44aC05Ljh2OS44aC00LjljLTguMTE5MyAwLTE0LjcgNi41ODA3LTE0LjcgMTQuN3M2LjU4MDcgMTQuNyAxNC43IDE0LjdoMTkuNmMyLjcwNDggMCA0LjkgMi4xOTUyIDQuOSA0LjlzLTIuMTk1MiA0LjktNC45IDQuOWgtMjkuNHY5LjhoMTQuN3Y5LjhoOS44di05Ljh6IiBmaWxsPSJ1cmwoI2EpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgyPSIwIiB5Mj0iOTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzkwQ0UxNSIgb2Zmc2V0PSIwIi8+CjxzdG9wIHN0b3AtY29sb3I9IiMxRTk2MjAiIG9mZnNldD0iMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==" />
          </Svg>
          {showSold && <Popup sold={true} left={popupLeft} soldPrice={soldPrice} soldDate={soldDate}/>}
          {showPopup && <Popup sold={false} left={popupLeft} soldPrice="" soldDate="" date={calendar[getIndex(xCoordinate)]}/>}
          <XAxisDiv>
            {xTicks.map(v => <XTickDiv data-value={v} key={v} />)}
          </XAxisDiv>
          <YAxisDiv>
            {yTicks.map(v => <YTickDiv data-value={v} key={v} />)}
          </YAxisDiv>
        </ChartDiv>
      </div>
    );
  }
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

const calendar = years.reduce((cal, year) => {
  for (let i = 0; i < months.length; i++) {
    cal.push(months[i] + ' ' + year);
  }
  return cal;
}, []);

function generateRange(number) {
  if (number < 1000000) {
    return parseInt(number / 1000, 10) + 'K';
  } return (parseInt(number / 10000, 10) / 100).toFixed(2) + 'M';
}

export default Chart;
