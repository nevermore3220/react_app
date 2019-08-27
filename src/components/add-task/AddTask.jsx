import React from "react";
import style from "./AddTask.module.css";
import plus from "./../../images/plus.png";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleClick() {
    if (this.state.value !== "") {
      let newID = Date.now();
      this.props.addTask(this.state.value, newID);
      this.setState({ value: "" });
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className={style.add_task_wrap}>
        <div className={style.add_task_btn}>
          <img src={plus} onClick={this.handleClick.bind(this)} />
        </div>
        <div className={style.input_task}>
          <input
            type="text"
            placeholder="Task"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default AddTask;
