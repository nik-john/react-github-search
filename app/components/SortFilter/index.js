import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Wrapper from './Wrapper';
import SortOrder from './SortOrder';
import messages from './messages';
import { SORT_OPTIONS } from '../../containers/HomePage/constants';
function createOption(option) {
  return { value: option, label: option };
}
function SortFilterComponent(props) {
  const optionsObjectArray = SORT_OPTIONS.map(createOption);
  return (
    <Wrapper>
      <FormattedMessage {...messages.label} />
      <Select
        options={optionsObjectArray}
        value={props.sortBy}
        onChange={props.handleChange}
      />
      <SortOrder handleToggle={props.handleToggleSortOrder} sortOrder={props.sortOrder} />
    </Wrapper>
  );
}

SortFilterComponent.propTypes = {
  sortBy: PropTypes.oneOf(SORT_OPTIONS),
  sortOrder: PropTypes.bool,
  handleChange: PropTypes.func,
  handleToggleSortOrder: PropTypes.func,
};

SortFilterComponent.defaultprops = {
  sortBy: SORT_OPTIONS[0],
};

export default SortFilterComponent;
