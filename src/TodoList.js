import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';


class TodoList extends Component {

  onDelete(todo) {
    this.props.deleteTodo(todo);
  }

  onEdit(todo){
    this.props.editTodo(todo);
  }

  render() {
    return (
      <Paper className="todo-list" elevation={2}>

        <Typography variant="title" gutterBottom>
          To-Dos
        </Typography>

        <List>
          {
            this.props.todos.map(todo => {
              return (

                <ListItem todo={todo} key={todo.id} button dense divider>

                  <ListItemText primary={todo.text} />

                  <Button variant="raised" color="primary" size="small" onClick={this.onEdit.bind(this, todo)}>
                    Edit
                  </Button>

                  <Button variant="raised" color="secondary" size="small" onClick={this.onDelete.bind(this, todo)}>
                    Delete
                  </Button>                 

                </ListItem>

              )           
            })
          }
        </List>
      </Paper>
    );
  }
}

export default TodoList;
