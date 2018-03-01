import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FinishedList from './FinishedList';

class App extends Component {
  constructor(props){
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleTodoAdd = this.handleTodoAdd.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
    this.handleFinishedDelete = this.handleFinishedDelete.bind(this);
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
      ],
      checked: [],
    }
  }

  handleToggle(todo){
    const { checked } = this.state;
    const { todos } = this.state;
    const newChecked = [...checked];
    const newTodo = [...todos];

    if (checked.indexOf(todo) === -1) {
      newChecked.push(todo);
      newTodo.splice(todos.indexOf(todo), 1);
      this.setState({
        checked: newChecked,
        todos: newTodo,
      });
    } else {
      newTodo.push(todo);
      newChecked.splice(checked.indexOf(todo), 1);
      this.setState({
        checked: newChecked,
        todos: newTodo,
      });
    }
  }

  handleTodoAdd(text){
    let all = this.state.todos.concat(this.state.checked);
    let allIds = [];

    for(let i = 0; i < all.length; i++){
      allIds.push(all[i].id);
    }

    let newTodo = {
      id: allIds.sort()[allIds.length - 1] + 1,
      text: text,
    }
    this.setState({
      todos: this.state.todos.concat(newTodo),
      text: '',
      isUpdate: 0,
    });
  }

  handleTodoDelete(todo){
    let todos = this.state.todos;
    let newTodos = [...todos];

    for(let i=0; i<newTodos.length; i++){
      if(newTodos[i].id === todo.id){
        newTodos.splice(newTodos.indexOf(todo), 1);
      }
    }
    this.setState({
      todos: newTodos,
      text: '',
    });
  }

  handleFinishedDelete(todo){
    let finished = this.state.checked;
    let newFinished = [...finished];

    for(let i=0; i<newFinished.length; i++){
      if(newFinished[i].id === todo.id){
        newFinished.splice(newFinished.indexOf(todo), 1);
      }
    }
    this.setState({
      checked: newFinished,
      text: '',
    });
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

  handleTodoUpdate(todo){
    let todos = this.state.todos;
    for(let i=0; i<todos.length; i++){
      if(todos[i].id === todo.id){
        todos.splice(i, 1, todo);
      }
    }

    this.setState({
      todos: todos,
      isEdit: 0,
      text: '',
    });
  }

  render(){
    return (

      <div className="App">

          <Typography variant="display2" style={{textAlign: 'center'}} gutterBottom>
            My To-Dos
          </Typography>
          
          <Grid container justify="center" className="lists-container">
            <Grid item xs={12} md={10} lg={8}>
              <Grid container spacing={16}>

                <Grid item xs={12}>
                  <TodoForm 
                    {...this.state}
                    changeText={this.handleChangeText}
                    onTodoUpdate={this.handleTodoUpdate}
                    onTodoAdd={this.handleTodoAdd} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TodoList
                    {...this.state}
                    toggleTodo={this.handleToggle}
                    deleteTodo={this.handleTodoDelete}
                    editTodo={this.handleTodoEdit} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FinishedList 
                    {...this.state}
                    toggleTodo={this.handleToggle}
                    deleteTodo={this.handleFinishedDelete} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

      </div>

    );
  }
}

export default App;
