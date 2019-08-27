import React from "react";
import TasksView from "./TasksView";
import { connect } from "react-redux";
import { checkTask, deleteTask } from "../../store/actions";

class TasksViewContainer extends React.Component {
  render() {
    return <TasksView tasks={this.props.tasks} checkTask={this.props.checkTask} deleteTask={this.props.deleteTask}/>;
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => ({
  checkTask: itemID => dispatch(checkTask(itemID)),
  deleteTask: isCompleted => dispatch(deleteTask(isCompleted))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksViewContainer);
