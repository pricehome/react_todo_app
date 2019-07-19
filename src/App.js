import React, { Component } from 'react';
import Header from "./components/layout/Header"
import ToDos from "./components/ToDos"
import AddToDo from "./components/AddToDo"
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner",
        completed: false
      },
      {
        id: 3,
        title: "Meeting",
        completed: false
      },
      {
        id: 4,
        title: "Homework",
        completed: false
      }
    ]
  }
// Toggle-Mark Complete
markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todoTaco => {
    if(todoTaco.id === id) {
      todoTaco.completed = !todoTaco.completed
    }
    return todoTaco;
  })});
}
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todoTaco => todoTaco.id !== id)] });
  }

  AddToDo = (title) => {
    const newToDo = {
      id: 4,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newToDo] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo AddToDo={this.AddToDo}/>
          <ToDos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>

      </div>
    );
  }
}
export default App;
