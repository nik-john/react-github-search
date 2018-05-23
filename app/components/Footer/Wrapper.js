import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em;
  font-size: 0.8em;
  border-top: 1px solid lightgray;
  background: white;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
`;

export default Wrapper;
