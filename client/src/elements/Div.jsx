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
    top: 100%; 
    left: 50%;
    margin-left: -5px;
    border-width: 8px;
    border-style: solid;
    border-color: #2A2A33 transparent transparent transparent;
  }
`;

export const ChartDiv = styled.div`
  font-family: "Open Sans",Gotham,gotham,Tahoma,Geneva,sans-serif;
  position: relative;
  padding-right: 0px;
  padding-bottom: 40px;
  font-size: 14px;
  margin: auto;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  line-height: 1.5;
  color: #2A2A33;
`;

export const XAxisDiv = styled.div`
  position: absolute;
  bottom: 0;
  height: 40px;
  left: 0;
  right: 40px;
  display: flex;
  justify-content: space-between;
`;

export const XTickDiv = styled.div`
  &:after {
    margin-top: 4px;
    display: inline-block;
    content: attr(data-value);
    color: black;
  }
`;

export const YAxisDiv = styled.div`
  position: absolute;
  top: 0;
  left: 488px;
  right: 0;
  width: 40px;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const YTickDiv = styled.div`
  &:after {
    margin-left: 4px;
    content: attr(data-value);
    color: black;
    display: inline-block;
  }
`;

export const LegendsDiv = styled.div`
  line-height: 1.5;
  color: #2A2A33;
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
  padding: 16px 5px 16px;
  margin: 0px 16px 32px;
`;

export const FlexColDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin-right: 8px;
`;

export const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 8px;
  flex-wrap: wrap;
`;

export const LegendImageDiv = styled.div`
  margin-right: 8px;
  display: block;
`;

export const IconDiv = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: left;
  max-width: 50%;
  flex: 1 0 auto;
`;

export const PopupDiv = styled.div`
  transform: translate(${props => props.left}px, ${props => props.sold ? "-250" : "-220"}px);
  z-index: 1;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 10px;
  position: absolute;
  text-align: center;
  width: 110px;
  border-radius: 3px;
`;

export const PopupTextDiv = styled.div`
  font-size: 14px;
  padding: 4px 0px;
`;
