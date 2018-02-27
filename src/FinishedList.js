import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';


class FinishedList extends Component {

  onDelete(finish){
    this.props.deleteTodo(finish);
  }

  render() {
    return (
      <Paper className="finished-list" elevation={2}>

        <Typography variant="title" gutterBottom style={{textAlign: 'center'}}>
          Finished
        </Typography>

        <List>
          {
            this.props.finished.map(todo => {

              return (
                <ListItem
                  todo={todo} 
                  key={todo.id}
                  button
                  dense
                  //onClick={this.onDelete.bind(this, todo)}
                  >

                  <ListItemText primary={todo.text} />

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

export default FinishedList;
