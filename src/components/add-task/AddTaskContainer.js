import React from 'react';
import AddTask from './AddTask';
import { connect } from 'react-redux';
import { addTask } from './../../store/actions';

class AddTaskContainer extends React.Component {
    render() {
        return(
            <AddTask addTask={this.props.addTask} />
        );
    }
}

const mapStateToProps = state => {
    return {
      tasks: state.tasks
    };
};
  
const mapDispatchToProps = dispatch => ({
    addTask: (newTask, newID) => dispatch(addTask(newTask, newID))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer);