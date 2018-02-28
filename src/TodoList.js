import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';



class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: [0],
    };
  }

  handleCheck(todo){
    const { checked } = this.state;
    const currentIndex = checked.indexOf(todo);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(todo);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  }

  onCheck(todo){

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

        <Typography variant="title" gutterBottom style={{textAlign: 'center', padding: '15px'}}>
          To-Dos
        </Typography>

        <List>
          {
            this.props.todos.map(todo => {
              return (
                <ListItem 
                  todo={todo} 
                  key={todo.id} 
                  button 
                  dense 
                  divider
                  onClick={this.handleCheck.bind(this, todo)}>
                  <Checkbox
                    checked={false}
                    tabIndex={-1}
                    disableRipple
                    checked={this.state.checked.indexOf(todo) !== -1} />
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
