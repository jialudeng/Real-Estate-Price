import styled from 'styled-components';

const Title = styled.span`
  display: inline-block;
  border-bottom: 1px dashed rgb(209, 209, 213);
  margin-bottom: 8px;
  cursor: pointer;
  color: ${props => props.black ? "#2A2A33" : "rgb(20, 157, 48)"};
  font-size: 16px;
  line-height: 24px;
  font-family: "Open Sans",Gotham,gotham,Tahoma,Geneva,sans-serif;
  margin-left: 16px;
`;

Title.displayName = 'Title';

export default Title;