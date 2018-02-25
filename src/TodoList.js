import React, { Component } from 'react';


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
                <button 
                  onClick={this.onDelete.bind(this, todo)}
                  className="delete text-white btn btn-danger px-1 py-0" 
                  href="#">x
                </button>
            </li>
          })
        }
      </ul>
    );
  }
}

export default TodoList;
