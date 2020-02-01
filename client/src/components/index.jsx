/* eslint-disable */
import React from 'react';
import axios from 'axios';

import Title from './Title';
import Header from './Header';
import Subtitle from './Subtitle';
import Tooltip from './Tooltip';
import Chart from './Chart';

import A from '../elements/A';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showZestimate: false,
      showSalesRange: false,
      showHistory: false,
      tooltipLeft: 0,
      triggerOffsetTop: 0,
      zestimate: 0,
      salesRange: 0,
      graphData: {},
      updateZestimate: '',
    };
    this.handleZestimateClick = this.handleZestimateClick.bind(this);
    this.handleSalesClick = this.handleSalesClick.bind(this);
    this.handleHistoryClick = this.handleHistoryClick.bind(this);
  }

  componentDidMount() {
    axios.get('/seed')
      .then((response) => {
        const oneGraph = response.data[0];
        console.log(oneGraph);
        this.setState({
          zestimate: oneGraph.zestimate,
          salesRange: oneGraph.salesRange,
          graphData: {city: oneGraph.city, neighborhood: oneGraph.neighborhood, property: oneGraph.property},
          
        })
      })
  }

  handleZestimateClick(e) {
    const { showZestimate } = this.state;
    this.setState({
      showZestimate: !showZestimate,
      triggerOffsetTop: e.target.offsetTop,
      tooltipLeft: e.target.offsetLeft + e.target.clientWidth + 10,
    });
  }

  handleSalesClick(e) {
    const { showSalesRange } = this.state;
    this.setState({
      showSalesRange: !showSalesRange,
      triggerOffsetTop: e.target.offsetTop,
      tooltipLeft: e.target.offsetLeft + e.target.clientWidth + 10,
    });
  }

  handleHistoryClick(e) {
    const { showHistory } = this.state;
    this.setState({
      showHistory: !showHistory,
      triggerOffsetTop: e.target.offsetTop,
      tooltipLeft: e.target.offsetLeft + e.target.offsetWidth + 10,
    });
  }

  render() {
    const {
      showZestimate, showSalesRange, showHistory, triggerOffsetTop, tooltipLeft,
    } = this.state;
    return (
      <div>
        <br />
        <br />
        <br />
        <Header />
        <div id="title-div">
          <Title
            price="$1,246,000"
            priceRange="$1.10M - $1.35M"
            onZestimateClick={this.handleZestimateClick}
            onSalesClick={this.handleSalesClick}
          />
        </div>
        {showZestimate
          && (
            <Tooltip
              triggerOffsetTop={triggerOffsetTop}
              left={tooltipLeft}
            >
           The Zestimate is Zillow&quot;s best estimate of this home&quot;s market value. It is not an appraisal and it should be used as a starting point.
              <A href="https://www.zillow.com/zestimate/">Learn more</A>
          .
              <br />
              <br />
          If your home facts are wrong, your Zestimate may be incorrect.
              <A href="Update them here">Update them here</A>
          .
              <br />
              <br />
          The Zestimate incorporates multiple data models and responds to factors like:
              <br />
              <br />
          Neighborhood details
          Home facts
              <br />
              <br />
          Popularity on Zillow
          Listing price
            </Tooltip>
          )}
        {showSalesRange
          && (
          <Tooltip
            triggerOffsetTop={triggerOffsetTop}
            left={tooltipLeft}
          >
          We calculate the estimated sales range based on the current market and the info we have about this home.
          </Tooltip>
          )}
        {showHistory
          && (
          <Tooltip
            triggerOffsetTop={triggerOffsetTop}
            left={tooltipLeft}
          >
          See a Zestimate jump? The Zestimate can change when the home is listed for sale, the home facts are updated, or the market fluctuates.
          </Tooltip>
          )}
        <Subtitle
          onHistoryClick={this.handleHistoryClick}
        />
        <Chart />
      </div>
    );
  }
}

export default Graph;
