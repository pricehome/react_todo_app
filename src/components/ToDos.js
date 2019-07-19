import React, { Component } from 'react';
import TodoItem from "./TodoItem"
import Proptypes from "prop-types";

class ToDos extends Component {
  render() {
    return this.props.todos.map((todoTaco) => (
      <TodoItem key={todoTaco.id} todoTaco={todoTaco} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}
// Define PropTypes
ToDos.propTypes = {
  todos: Proptypes.array.isRequired
}
export default ToDos;