import React, { PureComponent } from "react";
import style from "./habit.module.css";

class Habit extends PureComponent {
  handleincrease = () => {
    this.props.onincrease(this.props.habit);
  };
  handledecrease = () => {
    this.props.ondecrease(this.props.habit);
  };
  handledelete = () => {
    this.props.ondelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className={style.li}>
        <div className={style.name}>{name}</div>
        <div className={style.count}>{count}</div>
        <button className={style.button} onClick={this.handleincrease}>
          +
        </button>
        <button className={style.button} onClick={this.handledecrease}>
          -
        </button>
        <button className={style.button} onClick={this.handledelete}>
          🗑
        </button>
      </li>
    );
  }
}
export default Habit;
