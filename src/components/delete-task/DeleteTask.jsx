import React from "react";
import style from "./DeleteTask.module.css";
import deleteBTN from "./../../images/delete.png";

class DeleteTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true
    };
  }

  handleClick() {
    this.props.deleteTask(this.state.value);
  }

  render() {
    return (
      <div className={style.delete_task}>
        <div className="content">
          <div className={style.delete_task_wrap}>
            <span className={style.todo_logo}>TODO list</span>
            <div className={style.add_task_btn} onClick={this.handleClick.bind(this)}>
              <img src={deleteBTN} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteTask;
