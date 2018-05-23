import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Item from './Item';
import Wrapper from './Wrapper';

import A from '../A';

function IssuesListItem(props) {
  const openSvg = <svg className={props.item.state} viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>;
  const closedSvg = <svg className={props.item.state} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z"></path></svg>;

  const userName = <a className="user-name" href={props.item.user.html_url}>{props.item.user.login}</a>;

  return (
    <Wrapper>
      {props.item.state === 'open' ? openSvg : closedSvg}
      <Item>
        <A href={props.item.html_url}>
          {props.item.title}
        </A>
        <section>
          <span>#{props.item.id}</span>
          <span> opened at {moment(props.item.created_at).format('MMMM Do YYYY, h:mm:ss a')} by {userName}</span>
          <div>
            {props.item.labels.length ?
              <div>Labels &nbsp;
                {props.item.labels.map((l) => <a href={l.url} className="label" style={{ background: `#${l.color}` }} key={l.id}>{l.name}</a>)}
              </div> : ''}
          </div>
        </section>
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
