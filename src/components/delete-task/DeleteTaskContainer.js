import React from 'react';
import DeleteTask from './DeleteTask';
import { connect } from 'react-redux';
import { deleteTask } from './../../store/actions';

class DeleteTaskContainer extends React.Component {
    render() {
        return(
            <DeleteTask deleteTask={this.props.deleteTask}/>
        );
    }
}

const mapStateToProps = state => {
    return {
      tasks: state.tasks
    };
};
  
const mapDispatchToProps = dispatch => ({
    deleteTask: isCompleted => dispatch(deleteTask(isCompleted))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTaskContainer);