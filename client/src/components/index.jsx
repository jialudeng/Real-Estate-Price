import React from 'react';

import Title from './Title.jsx';
import Header from './Header.jsx';
import Subtitle from './Subtitle.jsx';
import Tooltip from './Tooltip.jsx';

import A from '../elements/A.jsx';



class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showZestimate: false,
      showSalesRange: false,
      showHistory: false,
      tooltipLeft: 0,
      triggerOffsetTop: 0
    }
  }

  handleZestimateClick(event) {
    this.setState({
      showZestimate: !this.state.showZestimate,
      triggerOffsetTop: event.target.offsetTop,
      tooltipLeft: event.target.offsetLeft + event.target.clientWidth + 10
    })
  }

  handleSalesClick(event) {
    this.setState({
      showSalesRange: !this.state.showSalesRange,
      triggerOffsetTop: event.target.offsetTop,
      tooltipLeft: event.target.offsetLeft + event.target.clientWidth + 10
    })
  }

  handleHistoryClick(event) {
    this.setState({
      showHistory: !this.state.showHistory,
      triggerOffsetTop: event.target.offsetTop,
      tooltipLeft: event.target.offsetLeft + event.target.offsetWidth + 10
    })
  }

  render() {
    return (
      <div>
          <Header />
          <div id="title-div">
          <Title 
            price={'$1,246,000'}
            priceRange={'$1.10M - $1.35M'}
            onZestimateClick={this.handleZestimateClick.bind(this)}
            onSalesClick={this.handleSalesClick.bind(this)}
          />
          </div>
          {this.state.showZestimate && 
            <Tooltip 
              triggerOffsetTop={this.state.triggerOffsetTop}
              left={this.state.tooltipLeft}
            >
            The Zestimate is Zillow's best estimate of this home's market value. It is not an appraisal and it should be used as a starting point. <A href="https://www.zillow.com/zestimate/">Learn more</A>. 
            <br></br>
            <br></br> 
            If your home facts are wrong, your Zestimate may be incorrect. <A href="Update them here">Update them here</A>. 
            <br></br>
            <br></br>  
            The Zestimate incorporates multiple data models and responds to factors like:
            <br></br>
            <br></br>  
            Neighborhood details
            Home facts 
            <br></br>
            <br></br> 
            Popularity on Zillow
            Listing price
            </Tooltip>
          }
          {this.state.showSalesRange && 
            <Tooltip
              triggerOffsetTop={this.state.triggerOffsetTop}
              left={this.state.tooltipLeft}
            >
            We calculate the estimated sales range based on the current market and the info we have about this home.
            </Tooltip>
          }
          {this.state.showHistory && 
            <Tooltip
              triggerOffsetTop={this.state.triggerOffsetTop}
              left={this.state.tooltipLeft}
            >
            See a Zestimate jump? The Zestimate can change when the home is listed for sale, the home facts are updated, or the market fluctuates.
            </Tooltip>
          }
          <Subtitle 
            onHistoryClick={this.handleHistoryClick.bind(this)}
          />
      </div>
    )
  }
};

export default Graph;