import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
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
      <List className="todo-list">
        {
          this.props.todos.map(todo => {
            return <ListItem 
              leftCheckbox={<Checkbox />}
              className="" 
              todo={todo} 
              key={todo.id}
              primaryText={todo.text} />

              /*---TODO: Implemment this buttons---*/
                /*<span onClick={this.onEdit.bind(this, todo)}>{todo.text}</span> 
                <RaisedButton 
                  href="#"
                  onClick={this.onDelete.bind(this, todo)}
                  label="X"
                  backgroundColor="#F44336" />*/
            
          })
        }
      </List>
    );
  }
}

export default TodoList;
