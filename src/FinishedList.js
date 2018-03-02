import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

class FinishedList extends Component {

  handleCheck(todo){
    this.props.toggleTodo(todo)
  }

  onDelete(finish){
    this.props.deleteTodo(finish);
  }

  render() {
    return (
      <Paper className="finished-list" elevation={2}>
        {/* TITLE */}
        <Typography variant="title" gutterBottom style={{textAlign: 'center', padding: '15px'}}>
          Finished
        </Typography>

        {/* LIST */}
        <List>
          {
            this.props.checked.map(todo => {
              return (
                <Fade in={true}>
                <ListItem
                  todo={todo} 
                  key={todo.id}
                  button
                  dense
                  divider
                  onClick={this.handleCheck.bind(this, todo)}>

                  {/*CHECKBOX*/}
                  <Checkbox
                    disableRipple
                    color="primary"
                    onClick={this.handleCheck.bind(this, todo)}
                    checked={true} />

                  {/*TEXT*/}
                  <ListItemText primary={todo.text} style={{textDecoration: "line-through"}}/>

                  {/*BUTTONS*/}
                  <ListItemSecondaryAction>
                    {/*EDIT BUTTON*/}
                    <IconButton>
                      <DeleteIcon onClick={this.onDelete.bind(this, todo)} />
                    </IconButton>
                  </ListItemSecondaryAction>

                </ListItem>
                </Fade>
              )
            })
          }
        </List>
        
      </Paper>
    );
  }
}

export default FinishedList;
