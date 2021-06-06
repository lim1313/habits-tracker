import React, { PureComponent } from "react";
import style from "./navbar.module.css";

class Navbar extends PureComponent {
  render() {
    return (
      <div className={style.head}>
        <h2 className={style.headText}>Habit Traker</h2>
        <div className={style.num}>
          {this.props.habit.filter(habit => habit.count > 0).length}
        </div>
      </div>
    );
  }
}

export default Navbar;
