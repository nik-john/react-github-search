import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0;
  flex: 1;
  flex-direction: column; 
  width: 45%;
  margin-right: 5%;
  &:nth-child(2), &:nth-child(4) {
    margin-right: 0px;
  }
  > span {
    font-size: 0.8em;
  }
`;

export default Wrapper;
