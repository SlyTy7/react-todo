import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';


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

        <Typography variant="title" gutterBottom>
          To-Dos
        </Typography>

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
            })
          }
        </List>
      </div>
    );
  }
}

export default TodoList;
