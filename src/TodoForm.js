import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

class TodoForm extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.changeText(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();

    let text = this.props.text.trim();

    if(!text){
      alert('Please enter a to-do!');
      return;
    }

    if(this.props.isEdit){
      let updatedTodo = {
        id: this.props.isEdit,
        text: text,
      }
      this.props.onTodoUpdate(updatedTodo);

    } else {
      this.props.onTodoAdd(text);
    }
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8} className="todo-form" style={{textAlign: 'center'}}>
        
          <Paper style={{padding: '0px 15px 15px 15px'}}>
            <form onSubmit={this.handleSubmit}>
              <TextField 
                id="textarea"
                label="Enter A To-Do"
                type="text"
                fullWidth
                value={this.props.text}
                onChange={this.handleChange} />
            </form>
          </Paper>

        </Grid>
      </Grid>
    );
  }

}

export default TodoForm;
