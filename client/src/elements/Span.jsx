import styled from 'styled-components';

const TitleSpan = styled.span`
  font-size: ${props => props.large ? '17px' : '16px'};
  display: inline-block;
  cursor: pointer;
  color: ${props => props.black ? '#2A2A33' : 'rgb(20, 157, 48)'};
  line-height: 10px;
  padding: 6px;
  font-family: "Open Sans",Gotham,gotham,Tahoma,Geneva,sans-serif;
  border-bottom: 1px dashed rgb(209, 209, 213);
`;

const TooltipSpan = styled.span`
  position: relative;
  justifySelf: center;
  font-family: "Open Sans", Tahoma, Geneva, sans-serif;
  font-size: 14px;
  text-align: center;
`;

export default { TitleSpan, TooltipSpan }