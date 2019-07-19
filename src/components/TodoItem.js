import React, { Component } from 'react';
import PropTypes from "prop-types";
// import { identifier } from "@babel/types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
        // Styling parameters for task completion
        background: "f4f4f4",
        padding: "10px",
        borderBottom: "1px #ccc dotted",
        textDecoration: this.props.todoTaco.completed ? "line-through" : "none"
      }
    }


  render() {
    const { id, title } = this.props.todoTaco;
    return (
      // Style= is to allow for strike through upon completion.  Add Checkbox is line after next... {" "} gives space between box and text
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } /> {" "}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}
// Define PropTypes
TodoItem.propTypes = {
  todoTaco: PropTypes.object.isRequired
}
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
}
export default TodoItem
