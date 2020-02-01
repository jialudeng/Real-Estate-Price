/* eslint-disable arrow-parens */
import styled from 'styled-components';

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const LeftDiv = styled.div`
  display: flex;
  justify-content: left;
  margin: 12px 16px 8px;
`;

export const TooltipDiv = styled.div`
  position: absolute;
  display: inline-block;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  border-radius: 5px;
  background: #2A2A33;
  color: #FFF;
  width: 310px; 
  padding: 5px 10px 8px;
  &:after {
    content: " ";
    position: absolute;
    top: 50%;
    right: 100%; 
    margin-top: -5px;
    border-width: 8px 8px 8px 0;
    border-style: solid;
    border-color: transparent #2A2A33 transparent transparent;;
  }
`;
