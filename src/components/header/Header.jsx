import React from "react";
import style from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <div className={style.delete_task_wrap}>
        <span className={style.todo_logo}>TODO list</span>
      </div>
    );
  }
}

export default Header;
