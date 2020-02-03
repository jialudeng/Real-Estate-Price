import styled from 'styled-components';

export const TitleSpan = styled.span`
  font-size: ${props => props.large ? '17px' : '16px'};
  display: inline-block;
  cursor: pointer;
  color: ${props => props.black ? '#2A2A33' : 'rgb(20, 157, 48)'};
  line-height: 10px;
  padding: 6px;
  font-family: "Open Sans",Gotham,gotham,Tahoma,Geneva,sans-serif;
  border-bottom: 1px dashed rgb(209, 209, 213);
  font-weight: ${props => props.bold ? '900' : 'normal'}
`;

export const TooltipSpan = styled.span`
  position: relative;
  justifySelf: center;
  font-family: "Open Sans", Tahoma, Geneva, sans-serif;
  font-size: 14px;
  text-align: center;
`;

export const IconSpan = styled.span`
  font-family: "Open Sans", Tahoma, Geneva, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
`;

export const LegendSpan = styled.span`
  color: color: rgb(42, 42, 51);
  font-family: "Open Sans", Tahoma, Geneva, sans-serif, Extra-Bold Italic;
  font-weight: ${props => props.bold ? '600' : '400'};
  font-size: 14px;
  line-height: 21px;
`;
