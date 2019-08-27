import React from "react";
import style from "./TasksView.module.css";
import deleteBTN from "./../../images/delete.png";

class TaskView extends React.Component {
  handleClick(itemID) {
    this.props.checkTask(itemID);
  }

  handleClickDelete(itemID) {
    this.props.deleteTask(itemID);
  }

  render() {
    return (
      <div className={style.task}>
        {this.props.tasks.map(item => (
          <div className={style.task_row_wrap}>
            <div className={style.task_content}>
              <input
                type="checkbox"
                className={style.checkbox}
                id={item.id}
                checked={item.completed}
                onClick={() => {
                  let itemID = item.id;
                  this.handleClick(itemID);
                }}
              />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
            <div
              className={style.delete_btn}
              onClick={() => {
                let itemID = item.id;
                this.handleClickDelete(itemID);
              }}
            >
              <img src={deleteBTN} alt="" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TaskView;
