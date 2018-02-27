import React, { Component } from 'react';
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
      alert('please enter a to-do');
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
      <div className="todo-form">
      
        <form onSubmit={this.handleSubmit}>
          <TextField 
            placeholder="Enter New To-Do"
            type="text"
            value={this.props.text}
            onChange={this.handleChange} />
        </form>

      </div>
    );
  }

}

export default TodoForm;
