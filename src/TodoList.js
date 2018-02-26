import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class TodoList extends Component {

  onDelete(todo) {
    this.props.deleteTodo(todo);
  }

  onEdit(todo){
    this.props.editTodo(todo);
  }

  render() {
    return (
      <ul className="todo-list list-group">
        {
          this.props.todos.map(todo => {
            return <li 
              className="list-group-item" 
              todo={todo} 
              key={todo.id}>
                <span onClick={this.onEdit.bind(this, todo)}>{todo.text}</span> 
                <RaisedButton 
                  href="#"
                  onClick={this.onDelete.bind(this, todo)}
                  label="X" />
            </li>
          })
        }
      </ul>
    );
  }
}

export default TodoList;
