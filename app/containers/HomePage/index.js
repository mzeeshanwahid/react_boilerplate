/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { useInjectReducer } from "../../utils/injectReducer";
import { useInjectSaga } from "../../utils/injectSaga";
import { requestAPIData } from "./actions";
import { createStructuredSelector } from 'reselect';
import { makeSelectTodos } from "./selectors";
import reducer from "./reducer";
import saga from "./sagas";

const key = "API_CALL";

export function HomePage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [todos, setTodos] = useState([]);

  function getData(){
    console.log("Inside Get Data");
    props.onFetchData();
  };

  useEffect(() => {
    console.log("useEffect");
    if (props.todos.length > 0) {
      setTodos(props.todos);
    }
  }, [props]);

  getData();
  return (
    <div>
      <h1>Todo's</h1>
      {todos.length > 0 ? todos.map(todo => {
        return <p>{todo}</p>
      }) : `No Todos ${JSON.stringify(todos)}`}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos()
});

// const mapStateToProps = state => ({
//   todos: state.todos
// });


export function mapDispatchToProps(dispatch) {
  return {
    onFetchData: () => dispatch(requestAPIData())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(HomePage);