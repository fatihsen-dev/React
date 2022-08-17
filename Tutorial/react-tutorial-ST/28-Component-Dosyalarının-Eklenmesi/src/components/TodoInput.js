import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
    this.state = {
      error: "",
    };
  }
  submitEvent(e) {
    e.preventDefault();

    const textItemValue = e.target.textItem.value.trim();
    const error = this.props.addItem(textItemValue);
    this.setState({
      error: error,
    });
    e.target.textItem.value = "";
  }
  render() {
    return (
      <div>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        <form
          style={{
            width: "100%",
            display: "flex",
            gap: "10px",
          }}
          onSubmit={this.submitEvent}
        >
          <input
            style={{ flex: "1", fontSize: "18px" }}
            type='text'
            name='textItem'
          />
          <button
            style={{ padding: "0 10px", cursor: "pointer" }}
            type='submit'
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default TodoInput;
