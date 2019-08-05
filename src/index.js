import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { connect, Provider } from "react-redux";
import { createStore, bindActionCreators  } from "redux";

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

const initialState = {
  tasks: [
    { name: 'Погулять с собакой', id: 1 },
    { name: 'Поесть', id: 2 }
  ]
}

const rootReducer = (state = initialState, action) => {
  console.log(state);
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.name]
      }
    case DELETE_TASK: 
      return {
        ...state
      }
    default: return state
  }
}

const store = createStore(rootReducer);

const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    name: {
      name: newTask,
      id: 2
    }
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps =  {
    addTask
}

  class App extends React.Component {
    constructor(props){
      super(props)
      this.inputRef = React.createRef();
    }

    handleClick() {
      this.props.addTask(this.inputRef.current.value);
      this.inputRef.current.value = "";
    }

    render() {
      return (
          <div>
            <div>
              <input 
                type="text" 
                placeholder="Task"
                ref={this.inputRef} 
              />
            </div>
            <div>
                <button onClick={this.handleClick.bind(this)}>Добавить</button>
            </div>
          </div>
      );
    }
  }

  const WrapApp = connect(mapStateToProps, mapDispatchToProps)(App);
  
let rerender = () => {
  ReactDOM.render(
    <Provider store = {store}>
        <WrapApp />
    </Provider>
, document.getElementById('root'));
}

rerender();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
