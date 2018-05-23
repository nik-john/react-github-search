/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectIssues, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import IssuesList from 'components/IssuesList';
import AtPrefix from './AtPrefix';
import Form from './Form';
import Wrapper from './Wrapper';
import DateFilterSection from './DateFilterSection';
import SortFilterSection from './SortFilterSection';
import StateFilterSection from './StateFilterSection';
import AssigneeFilterSection from './AssigneeFilterSection';
import MentionedFilterSection from './MentionedFilterSection';
import CreatorFilterSection from './CreatorFilterSection';
import LabelsFilterSection from './LabelsFilterSection';
import MilestoneFilterSection from './MilestoneFilterSection';
import Section from './Section';
import messages from './messages';
import { loadIssues } from '../App/actions';
import { changeUsername, changeReponame } from './actions';
import { makeSelectUsername, makeSelectReponame, makeSelectSortBy, makeSelectSortOrder } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, issues } = this.props;
    const issuesListProps = {
      loading,
      error,
      issues,
    };
    const TextFieldsWrapper = styled.section`
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      padding: 1em 0;
      align-items: center;
      flex-flow: row wrap;
    `;
    const SelectFieldsWrapper = styled.section`
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      padding: 1em 0;
      align-items: center;
      flex-flow: row wrap;
    `;

    return (
      <Wrapper>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Application for searching GitHub issues" />
        </Helmet>
        <div>
          <Section>
            <em>
              <FormattedMessage {...messages.showIssuesFor} />
              <AtPrefix>
                <FormattedMessage {...messages.atPrefix} />
              </AtPrefix>
              {this.props.username}
              <em>/</em>
              {this.props.reponame}
              <strong>&nbsp;- {this.props.issues.length || '...' } item(s)</strong>
            </em>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <input
                  id="username"
                  type="hidden"
                  placeholder="atom"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                  disabled
                />
              </label>
              <label htmlFor="reponame">
                <input
                  id="reponame"
                  type="hidden"
                  placeholder="atom"
                  value={this.props.reponame}
                  onChange={this.props.onChangeReponame}
                  disabled
                />
              </label>
              {/* <FilterFilterSection /> */}
              <TextFieldsWrapper>
                <AssigneeFilterSection />
                <MentionedFilterSection />
                <CreatorFilterSection />
                <LabelsFilterSection />
                <MilestoneFilterSection />
              </TextFieldsWrapper>
              <SelectFieldsWrapper>
                <StateFilterSection />
                <DateFilterSection />
              </SelectFieldsWrapper>
              <SortFilterSection />
            </Form>
            <IssuesList {...issuesListProps} />
          </Section>
        </div>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  issues: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  reponame: PropTypes.string,
  onChangeReponame: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangeReponame: (evt) => dispatch(changeReponame(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadIssues());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  issues: makeSelectIssues(),
  username: makeSelectUsername(),
  reponame: makeSelectReponame(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  sortBy: makeSelectSortBy(),
  sortOrder: makeSelectSortOrder(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
