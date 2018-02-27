import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';


class TodoList extends Component {

  onDelete(todo) {
    this.props.deleteTodo(todo);
  }

  onEdit(todo){
    this.props.editTodo(todo);
  }

  render() {
    return (
      <div className="todo-list">
        <List>
          {
            this.props.todos.map(todo => {
              return (
                <ListItem
                  className="" 
                  todo={todo} 
                  key={todo.id}
                  button
                  dense
                  onClick={this.onEdit.bind(this, todo)}>

                  <ListItemText primary={todo.text} />

                </ListItem>
              )
                //---TODO: Implemment this buttons---
                //<span onClick={this.onEdit.bind(this, todo)}>{todo.text}</span> 
                //<RaisedButton 
                  //href="#"
                  //onClick={this.onDelete.bind(this, todo)}
                  //label="X"
                  //backgroundColor="#F44336" />
              
            })
          }
        </List>
      </div>
    );
  }
}

export default TodoList;
