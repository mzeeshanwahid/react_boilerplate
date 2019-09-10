/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { requestAPIData } from './actions';
import { makeSelectTodos } from './selectors';
import reducer from './reducer';
import saga from './sagas';

const key = 'home';

export function HomePage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    props.onFetchData();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {props.todos.length > 0
        ? props.todos.map(todo => <p key={todo.id}>{todo.title}</p>)
        : `No Todos ${JSON.stringify(props.todos)}`}
    </div>
  );
}

HomePage.propTypes = {
  todos: PropTypes.array,
  onFetchData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchData: () => dispatch(requestAPIData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
