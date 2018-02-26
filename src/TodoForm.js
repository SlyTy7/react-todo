import React, { Component } from 'react';

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
    let text = this.refs.text.value.trim();

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
      </div>
    );
  }

}

export default TodoForm;
