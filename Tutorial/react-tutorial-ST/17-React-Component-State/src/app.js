class Car extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);

    this.state = {
      band: "Opel",
      model: "Astra",
      color: "Red",
      year: 2020,
    };
  }
  changeColor() {
    if (this.state.color == "Red") {
      this.setState({
        color: "Blue",
      });
    } else {
      this.setState({
        color: "Red",
      });
    }
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.band} - {this.state.model}
        </h1>
        <p>
          {this.state.year} - {this.state.color}
        </p>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Car />);
