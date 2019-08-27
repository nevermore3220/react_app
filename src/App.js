import React from "react";
import "./App.css";
import AddTaskContainer from "./components/add-task/AddTaskContainer";
import Header from "./components/header/Header";
import TasksViewContainer from "./components/tasks-view/TasksViewContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TasksViewContainer />
        <AddTaskContainer />
      </div>
    );
  }
}

export default App;
