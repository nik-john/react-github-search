import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;
  padding: 5px;
  svg {
    margin: 0px 1em;
    &.open {
      color: #28a745;
    }
    &.closed {
      color: #cb2431;
    }
  }
  &:first-child {
    border-top: none;
  }
  &:hover {
    background-color: #f6f8fa;
  }
  .label {
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 2px 5px;
    margin-right: 5px;
    text-decoration: none;
    color: black;
    border: none;
    font-size: 0.8em;
    font-weight: bold;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default Wrapper;
