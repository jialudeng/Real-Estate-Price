import styled from 'styled-components';

const A = styled.a`
  cursor: pointer;
  color: #006AFF;
  &:hover{
    text-decoration: underline;
    color: rgb(0, 106, 255);
  }
  &:visited{
    color: #7A48D6;
  };
  text-decoration: none;
`
export default A;