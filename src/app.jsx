import React, { Component } from "react";
import Habits from "./components/habits";
import Habitadd from "./components/habitadd";
import Navbar from "./components/navbar";
import style from "./app.module.css";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "reading", count: 0 },
      { id: 2, name: "running", count: 0 },
      { id: 3, name: "studying", count: 0 },
    ],
  };

  handleincrease = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: item.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handledecrease = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        console.log(item.count);
        const count = item.count - 1;
        console.log(count);
        return { ...habit, count: count > 0 ? count : 0 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handledelete = habit => {
    const arr = this.state.habits;
    const habits = arr.filter(habits => {
      return habits.id !== habit.id;
    });
    this.setState({ habits });
  };

  handleSubmit = myref => {
    const habits = [...this.state.habits];
    const habit = { id: Date.now(), name: myref, count: 0 };
    if (myref === "") {
      return;
    }
    habits.push(habit);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <div className={style.head}>
        <Navbar habit={this.state.habits} />
        <Habitadd habit={this.state.habits} onAdd={this.handleSubmit} />
        <Habits
          habits={this.state.habits}
          onincrease={this.handleincrease}
          ondecrease={this.handledecrease}
          ondelete={this.handledelete}
          onreset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
