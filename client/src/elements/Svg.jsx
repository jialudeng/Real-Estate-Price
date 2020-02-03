/* eslint-disable arrow-parens */
import styled from 'styled-components';

const Svg = styled.svg`
  fill: none;
  display: block;
  margin: auto;
  left: 0;
  stroke-width: 1.5px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

export default Svg;
