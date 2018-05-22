import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Wrapper from './Wrapper';
import messages from './messages';

function DateFilter(props) {
  const since = props.since ? moment(props.since) : moment();
  return (
    <Wrapper>
      <FormattedMessage {...messages.label} />
      <DatePicker
        selected={since}
        onChange={props.handleChange}
      />
    </Wrapper>
  );
}

DateFilter.propTypes = {
  since: PropTypes.string,
  handleChange: PropTypes.func,
};

export default DateFilter;
