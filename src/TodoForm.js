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
    console.log('changing text...');
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.ref);
    let text = this.refs.text.props.value.trim();

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

    this.refs.text.value = '';
  }

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <TextField 
            hintText="Enter New To-Do"
            type="text"
            ref="text" 
            value={this.props.text}
            onChange={this.handleChange}/>
        </form>
        
      {/*
        <form onSubmit={this.handleSubmit}>
          <div className="">
            <label className="">Todo List</label>
            <input 
              type="text" 
              ref="text" 
              value={this.props.text}
              onChange={this.handleChange} 
              className=""/>
          </div>
        </form>
      */}
      </div>
    );
  }

}

export default TodoForm;
