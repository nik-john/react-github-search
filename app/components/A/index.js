/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const A = styled.a`
  font-weight: bold;
  font-size: 1em;
  color: #24292e;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: #0366d6;    
  }
`;

export default A;
