import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: left;
  color: #586069;
  > section {
    font-size: 0.8em;
    > div {
      margin-top: 5px;
    }
  }
  .user-name {
    color: #586069;
      text-decoration: none;
    &:hover {
      color: #0366d6 !important;
      text-decoration: none;
    }
  }
`;

export default Item;
