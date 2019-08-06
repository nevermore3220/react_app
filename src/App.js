import React from "react";
import "./App.css";
import AddTaskContainer from "./components/add-task/AddTaskContainer";
import DeleteTaskContainer from "./components/delete-task/DeleteTaskContainer";
import TasksViewContainer from "./components/tasks-view/TasksViewContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DeleteTaskContainer />
        <TasksViewContainer />
        <AddTaskContainer />
      </div>
    );
  }
}

export default App;
