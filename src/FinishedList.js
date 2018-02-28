import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';


class FinishedList extends Component {
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

  onDelete(finish){
    this.props.deleteTodo(finish);
  }

  onCheck(todo){
    console.log(todo);
  }

  render() {
    return (
      <Paper className="finished-list" elevation={2}>

        <Typography variant="title" gutterBottom style={{textAlign: 'center', padding: '15px'}}>
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
                  onClick={this.handleCheck.bind(this, todo)}
                >
                  <Checkbox
                    checked={false}
                    tabIndex={-1}
                    disableRipple
                    checked={this.state.checked.indexOf(todo) !== -1}
                  />

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
