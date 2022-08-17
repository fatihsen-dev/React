class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Chicken", "Cow", "Pih", "Dog", "Cat"],
    };
    this.clearItems = this.clearItems.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  clearItems() {
    this.setState({
      items: [],
    });
  }
  addItem(valu) {
    if (this.state.items.indexOf(valu) > -1) {
      return "Bu değer zaten Bulunuyor";
    }
    this.setState((prevState) => {
      return { items: prevState.items.concat(valu) };
    });
  }
  render() {
    const app = {
      title: "Todo Application",
      desc: "Lorem, ipsum dolor.",
    };
    return (
      <div>
        <Header title={app.title} desc={app.desc} />
        <TodoList items={this.state.items} clearItems={this.clearItems} />
        <TodoInput addItem={this.addItem} />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((liText, index) => (
            <TodoItem key={index} text={liText} />
          ))}
        </ul>
        <button onClick={this.props.clearItems}>Clear todo</button>
      </div>
    );
  }
}
class TodoItem extends React.Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}
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
        <form onSubmit={this.submitEvent}>
          <input type='text' name='textItem' />
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.desc}</div>
      </div>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<TodoApp />);
