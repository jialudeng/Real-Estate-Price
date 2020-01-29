import React from 'react';

import Title from './Title.jsx';
import Header from './Header.jsx';


class Graph extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header>Home value</Header>
        </div>
        <div>
          <Title black>
            Zestimate
          </Title>
        </div>
        <div>
          <Title>
            Estimated sales range: $1.41M - $1.69M
          </Title>
        </div>
        <div>
          <Title black>
          Zestimate history
          </Title>
        </div>
      </div>
    )
  }
};

export default Graph;