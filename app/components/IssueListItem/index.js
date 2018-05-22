import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

import A from '../A';
import H2 from '../H2';

function IssuesListItem(props) {
  return (
    <Wrapper>
      <Item>
        <A href={props.item.url}>
          <H2>{props.item.title}</H2>
          <section>
            <em>#{props.item.id}</em>
            <span> opened at {props.item.created_at} by {props.item.user.login}</span>
            <span> ({props.item.state})</span>
          </section>
        </A>
      </Item>
    </Wrapper>
  );
}

IssuesListItem.propTypes = {
  // item: PropTypes.shape({
  //   title: PropTypes.string,
  //   url: PropTypes.string,
  //   id: PropTypes.number,
  //   username: PropTypes.string,
  //   state: PropTypes.string,
  //   createDate: PropTypes.string,
  // }),
  item: PropTypes.any,
};

export default IssuesListItem;
