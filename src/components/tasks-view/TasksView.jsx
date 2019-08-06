import React from "react";
import style from "./TasksView.module.css";
import curcle from "./../../images/circle-outline.png";
import checked from "./../../images/checkbox-marked-circle-outline.png";

class TaskView extends React.Component {

  handleClick(itemID) {
    this.props.checkTask(itemID);
  }

  render() {
    return (
      <div className={style.tasks_view}>
        <div className="content">
          <div className={style.task}>
            {this.props.tasks.map(item => (
              <div className={style.task_content} 
              onClick={() => {
                let itemID = item.id;
                this.handleClick(itemID);
              }
                }>
                <img
                  src={item.completed ? checked : curcle}
                  alt=""
                />
                <span className={style.task_text}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskView;
