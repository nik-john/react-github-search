import React from 'react';
import PropTypes from 'prop-types';

function SortOrderComponent(props) {
  const { sortOrder, handleToggle } = props;
  const onToggle = () => handleToggle(sortOrder);
  return sortOrder ? <button onClick={onToggle}>&#x21E3;</button>
    : <button onClick={onToggle}>&#x21E1;</button>;
}

SortOrderComponent.propTypes = {
  sortOrder: PropTypes.bool,
  handleToggle: PropTypes.func,
};

export default SortOrderComponent;
