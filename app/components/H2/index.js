import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 1.5em;
  margin: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 0 8px 0 rgba(0,0,0,.3);
  padding: 1em 0;
  text-align: center;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  > svg {
    margin-right: 10px;
  }
`;

export default H2;
