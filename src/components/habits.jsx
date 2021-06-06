import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  handleincrease = habit => {
    this.props.onincrease(habit);
  };
  handledecrease = habit => {
    this.props.ondecrease(habit);
  };
  handledelete = habit => {
    this.props.ondelete(habit);
  };

  handleReset = () => {
    this.props.onreset();
  };

  render() {
    return (
      <>
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onincrease={this.handleincrease}
              ondecrease={this.handledecrease}
              ondelete={this.handledelete}
            />
          ))}
        </ul>
        <button onClick={this.handleReset}>Reset Count</button>
      </>
    );
  }
}

export default Habits;
