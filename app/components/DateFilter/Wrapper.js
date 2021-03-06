import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0;
  flex: 1;
  flex-direction: column;
  width: 45%;
  > span {
    font-size: 0.8em;
  }
  .react-datepicker-wrapper {
    color: #586069;
    background-color: #fafbfc;
    min-height: 34px;
    padding: 6px 8px;
    font-size: 16px;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
    display: flex;
    input {
      &:focus {
        outline: none;
      }
    }
  }
`;

export default Wrapper;
