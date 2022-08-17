class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusdOne = this.minusdOne.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      number: 0,
    };
  }
  containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };
  buttonStyle = {
    display: "grid",
    width: "40px",
    height: "30px",
    placeItems: "center",
    fontWeight: "500",
    fontSize: "16px",
    cursor: "pointer",
    userSelect: "none",
  };
  addOne() {
    this.setState((prevState) => {
      return {
        number: prevState.number + 1,
      };
    });
    console.log(this.state.number);
  }
  minusdOne() {
    this.setState((prevState) => {
      return {
        number: prevState.number - 1,
      };
    });
    console.log(this.state.number);
  }
  reset() {
    this.setState({
      number: 0,
    });
    console.log(this.state.number);
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div style={this.containerStyle}>
          <button onClick={this.addOne} style={this.buttonStyle}>
            +1
          </button>
          <b style={{ fontSize: "40px", width: "60px" }}>{this.state.number}</b>
          <button onClick={this.minusdOne} style={this.buttonStyle}>
            -1
          </button>
        </div>
        <button
          onClick={this.reset}
          style={{ padding: "3px 20px", cursor: "pointer" }}
        >
          reset
        </button>
      </div>
    );
  }
}
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Counter />);
