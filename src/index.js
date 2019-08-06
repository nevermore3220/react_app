import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { connect, Provider } from "react-redux";
import { createStore, bindActionCreators } from "redux";

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
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.task
        ]
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
    task: {
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

const mapDispatchToProps = (disaptch) => ({
  addTask: (newTask) => disaptch(addTask(newTask))
})

// () => ({}) - упрощенное написание () => { return {} }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
    this.state = {
      value: ''
    }
  }

  handleClick() {
    this.props.addTask(this.state.value);
    this.setState({ value: '' });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Task"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <button onClick={this.handleClick.bind(this)}>Добавить</button>
        </div>
        <div>
          {this.props.tasks.map((item) => (
            <div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const WrapApp = connect(mapStateToProps, mapDispatchToProps)(App);

let rerender = () => {
  ReactDOM.render(
    <Provider store={store}>
      <WrapApp />
    </Provider>
    , document.getElementById('root'));
}

rerender();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
