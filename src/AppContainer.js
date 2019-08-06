import React from 'react';
import App from './App';
import { connect } from 'react-redux';
import { addTask } from './store/actions';

class AppContainer extends React.Component {
    render() {
        return(
            <App addTask={this.props.addTask} tasks={this.props.tasks}/>
        );
    }
}

const mapStateToProps = state => {
    return {
      tasks: state.tasks
    };
};
  
const mapDispatchToProps = dispatch => ({
    addTask: newTask => dispatch(addTask(newTask))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);