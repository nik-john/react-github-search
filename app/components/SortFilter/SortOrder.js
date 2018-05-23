import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
function SortOrderComponent(props) {
  const { sortOrder, handleToggle } = props;
  const onToggle = () => handleToggle(sortOrder);
  return sortOrder ? <Wrapper onClick={onToggle}>&#x21E3;</Wrapper>
    : <Wrapper onClick={onToggle}>&#x21E1;</Wrapper>;
}

SortOrderComponent.propTypes = {
  sortOrder: PropTypes.bool,
  handleToggle: PropTypes.func,
};

export default SortOrderComponent;
