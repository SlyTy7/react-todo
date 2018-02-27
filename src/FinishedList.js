import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';


class FinishedList extends Component {

  onDelete(finish){
    this.props.deleteTodo(finish);
  }

  render() {
    return (
      <div className="finished-list">

        <Typography variant="title" gutterBottom>
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
                  onClick={this.onDelete.bind(this, todo)}>

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

export default FinishedList;
