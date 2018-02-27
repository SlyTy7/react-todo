import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FinishedList from './FinishedList';

class App extends Component {
  constructor(props){
    super(props);

    this.handleTodoAdd = this.handleTodoAdd.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
    this.handleTodoEdit = this.handleTodoEdit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
    this.state = {
      text: '',
      isEdit: 0,
      todos: [
        {
          id: 1,
          text: 'Meeting with client'
        },
        {
          id: 2,
          text: 'Take the trash out'
        },
        {
          id: 3,
          text: 'Do the dishes'
        },
      ]
    }
  }

  handleTodoAdd(text) {
    let newTodo = {
      id: this.state.todos.length + 1,
      text: text,
    }
    this.setState({
      todos: this.state.todos.concat(newTodo),
      text: '',
      isUpdate: 0,
    });
  }

  handleTodoDelete(todo) {
    let todos = this.state.todos;
    for(var i=0; i<todos.length; i++){
      if(todos[i].id === todo.id){
        todos.splice(i, 1);
      }
    }
    this.setState({todos: todos});
  }

  handleTodoEdit(todo){
    this.setState({
      text: todo.text,
      isEdit: todo.id
    });
  }

  handleChangeText(text){
    this.setState({
      text: text,
    });
  }

  handleTodoUpdate(todo) {
    let todos = this.state.todos;
    for(var i=0; i<todos.length; i++){
      if(todos[i].id === todo.id){
        todos.splice(i, 1, todo);
      }
    }
    //todos.push(todo);
    this.setState({
      todos: todos,
      isEdit: 0,
      text: '',
    });
  }

  render() {
    return (
      //<MuiThemeProvider>

        <div className="App">
          <div className="">
            <h1>To-Do List</h1>
            
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <TodoForm 
                  {...this.state}
                  changeText={this.handleChangeText}
                  onTodoUpdate={this.handleTodoUpdate}
                  onTodoAdd={this.handleTodoAdd} />
              </Grid>
              <Grid item xs={6}>
                <TodoList 
                  {...this.state}
                  deleteTodo={this.handleTodoDelete}
                  editTodo={this.handleTodoEdit} />
              </Grid>
              <Grid item xs={6}>
                <FinishedList />
              </Grid>
            </Grid>
            
          </div>
        </div>

      //</MuiThemeProvider>
    );
  }
}

export default App;
