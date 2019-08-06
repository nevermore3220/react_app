import React from "react";
import TasksView from "./TasksView";
import { connect } from "react-redux";
import { checkTask } from "../../store/actions";

class TasksViewContainer extends React.Component {
  render() {
    return <TasksView tasks={this.props.tasks} checkTask={this.props.checkTask} />;
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => ({
  checkTask: itemID => dispatch(checkTask(itemID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksViewContainer);
