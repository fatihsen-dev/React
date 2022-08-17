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
      <div className='mt-2'>
        {this.state.error && <p className='text-danger'>{this.state.error}</p>}
        <form className='d-flex gap-1' onSubmit={this.submitEvent}>
          <input
            className='flex-fill fs-5 px-1  rounded-1 border-0'
            type='text'
            name='textItem'
          />
          <button className='border-0 btn btn-success rounded-1' type='submit'>
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default TodoInput;
