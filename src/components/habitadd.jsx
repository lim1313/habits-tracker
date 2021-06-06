import React, { PureComponent } from "react";

class Habitadd extends PureComponent {
  myref = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAdd(this.myref.current.value);
    this.myref.current.value = "";
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={this.myref} type="text" alt="text" />
        <button>Add</button>
      </form>
    );
  }
}

export default Habitadd;
