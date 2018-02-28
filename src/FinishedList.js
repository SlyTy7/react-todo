import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';


class FinishedList extends Component {

  handleCheck(todo){
    this.props.toggleTodo(todo)
  }

  onDelete(finish){
    this.props.deleteTodo(finish);
  }

  //this.state.checked.indexOf(todo) !== -1

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
                <ListItem
                  todo={todo} 
                  key={todo.id}
                  button
                  dense
                  divider>

                  {/*CHECKBOX*/}
                  <Checkbox
                    tabIndex={-1}
                    disableRipple
                    onClick={this.handleCheck.bind(this, todo)}
                    checked={true} />

                  {/*TEXT*/}
                  <ListItemText 
                    primary={todo.text} 
                    onClick={this.handleCheck.bind(this, todo)} />

                  {/*DELETE BUTTON*/}
                  <Button 
                    variant="raised" 
                    color="secondary" 
                    size="small" 
                    tabIndex={-1}
                    onClick={this.onDelete.bind(this, todo)}>
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

export default FinishedList;
