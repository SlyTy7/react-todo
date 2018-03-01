import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Build';

class TodoList extends Component {

  handleCheck(todo){
    this.props.toggleTodo(todo)
  }

  onDelete(todo) {
    this.props.deleteTodo(todo);
  }

  onEdit(todo){
    this.props.editTodo(todo);
  }

  render() {
    return (
      <Paper className="todo-list" elevation={2}>
        {/* TITLE */}
        <Typography variant="title" gutterBottom style={{textAlign: 'center', padding: '15px'}}>
          To-Dos
        </Typography>

        {/* LIST */}
        <List>
          {
            this.props.todos.map(todo => {
              return (
                <ListItem 
                  todo={todo} 
                  key={todo.id}  
                  dense 
                  divider
                  button
                  onClick={this.handleCheck.bind(this, todo)} >

                  {/*CHECKBOX*/}
                  <Checkbox
                    disableRipple
                    onClick={this.handleCheck.bind(this, todo)}
                    checked={false} />

                  {/*TEXT*/}
                  <ListItemText primary={todo.text} />

                  {/*BUTTONS*/}
                  <ListItemSecondaryAction>
                    {/*EDIT BUTTON*/}
                    <IconButton aria-label="Edit">
                      <EditIcon onClick={this.onEdit.bind(this, todo)} />
                    </IconButton>

                    {/*DELETE BUTTON*/}
                    <IconButton aria-label="Delete">
                      <DeleteIcon onClick={this.onDelete.bind(this, todo)} />
                    </IconButton>
                  </ListItemSecondaryAction>

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
