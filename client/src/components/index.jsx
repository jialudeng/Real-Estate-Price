import React from 'react';
import axios from 'axios';

import Title from './Title';
import Header from './Header';
import Subtitle from './Subtitle';
import Tooltip from './Tooltip';
import ZestimateTooltip from './ZestimateTooltip';
import Chart from './Chart';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showZestimate: false,
      showSalesRange: false,
      showHistory: false,
      showChart: false,
      tooltipLeft: 0,
      tooltipTop: 0,
      zestimate: 0,
      salesRange: 0,
      graphData: {},
      updateZestimate: '',
    };
    this.handleZestimateClick = this.handleZestimateClick.bind(this);
    this.handleSalesClick = this.handleSalesClick.bind(this);
    this.handleHistoryClick = this.handleHistoryClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.zTooltip = React.createRef();
    this.sTooltip = React.createRef();
    this.hTooltip = React.createRef();
  }

  componentDidMount() {
    axios.get('/seed')
      .then((response) => {
        const {
          zestimate, salesRange, graphData, updateZestimate,
        } = response.data[response.data.length - 1];
        this.setState({
          zestimate,
          salesRange,
          graphData,
          updateZestimate,
          showChart: true,
        });
      });
  }

  handleZestimateClick(e) {
    const { showZestimate } = this.state;
    this.setState({
      showZestimate: !showZestimate,
      tooltipTop: e.clientY,
      tooltipLeft: e.target.offsetLeft + (e.target.clientWidth / 2),
    });
  }

  handleSalesClick(e) {
    const { showSalesRange } = this.state;
    this.setState({
      showSalesRange: !showSalesRange,
      tooltipTop: e.clientY,
      tooltipLeft: e.target.offsetLeft + (e.target.clientWidth / 2),
    });
  }

  handleHistoryClick(e) {
    const { showHistory } = this.state;
    this.setState({
      showHistory: !showHistory,
      tooltipTop: e.clientY,
      tooltipLeft: e.target.offsetLeft + (e.target.offsetWidth / 2),
    });
  }

  handleClose(e) {
    const { showZestimate, showSalesRange, showHistory } = this.state;
    console.log(e.target.innerHTML)
    console.log('-------')
    console.log(this.sTooltip.innerHTML)
    if (showZestimate && e.target.innerHTML != this.zTooltip.innerHTML) {
      this.setState({
        showZestimate: !showZestimate,
      })
    }
    if (showSalesRange && e.target.innerHTML != this.sTooltip.innerHTML) {
      this.setState({
        showSalesRange: !showSalesRange,
      })
    }
    if (showHistory && e.target.innerHTML != this.hTooltip.innerHTML) {
      this.setState({
        showHistory: !showHistory,
      })
    }
  }

  render() {
    const {
      showZestimate, showSalesRange, showHistory, showChart, tooltipTop, tooltipLeft, zestimate, salesRange, graphData, updateZestimate,
    } = this.state;
    return (
      <div onClick={this.handleClose}>
        <br />
        <br />
        <Header />
        <div id="title-div">
          <Title
            price={zestimate}
            priceRange={salesRange}
            onZestimateClick={this.handleZestimateClick}
            onSalesClick={this.handleSalesClick}
          />
        </div>
        {showZestimate
          && (
            <ZestimateTooltip
              top={tooltipTop}
              left={tooltipLeft}
              updateZestimate={updateZestimate}
              handleClick={this.handleZestimateClick}
              ref={this.zTooltip}
            />
          )}
        {showSalesRange
          && (
          <Tooltip
            top={tooltipTop}
            left={tooltipLeft}
            handleClick={this.handleSalesClick}
            ref={this.sTooltip}
          >
          We calculate the estimated sales range based on the current market and the info we have about this home.
          </Tooltip>
          )}
        {showHistory
          && (
          <Tooltip
            top={tooltipTop}
            left={tooltipLeft}
            handleClick={this.handleHistoryClick}
            ref={this.hTooltip}
          >
          See a Zestimate jump? The Zestimate can change when the home is listed for sale, the home facts are updated, or the market fluctuates.
          </Tooltip>
          )}
        <Subtitle
          onHistoryClick={this.handleHistoryClick}
        />
        {showChart && <Chart data={graphData} />}
      </div>
    );
  }
}

export default Graph;
