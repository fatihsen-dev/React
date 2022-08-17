class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Chicken", "Cow", "Pih", "Dog", "Cat"],
    };
    this.clearItems = this.clearItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  clearItems() {
    this.setState({
      items: [],
    });
  }
  deleteItem(item) {
    this.setState((prevState) => {
      const arr = prevState.items.filter((i) => {
        return item != i;
      });
      return {
        items: arr,
      };
    });
  }
  addItem(valu) {
    if (valu !== "") {
      if (this.state.items.indexOf(valu) > -1) {
        return "Bu değer zaten Bulunuyor";
      }
      this.setState((prevState) => {
        return { items: prevState.items.concat(valu) };
      });
    }
  }
  render() {
    const app = {
      title: "Todo Application",
      desc: "Lorem, ipsum dolor.",
    };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "2px",
        }}
      >
        <Header title={app.title} desc={app.desc} />
        <TodoList
          items={this.state.items}
          deleteItem={this.deleteItem}
          clearItems={this.clearItems}
        />
        <TodoInput addItem={this.addItem} />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {this.props.items.map((liText, index) => (
            <TodoItem
              deleteItem={this.props.deleteItem}
              key={index}
              text={liText}
            />
          ))}
        </ul>
        <button
          style={{ padding: "4px 0", cursor: "pointer" }}
          onClick={this.props.clearItems}
        >
          Clear 
        </button>
      </div>
    );
  }
}
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem() {
    this.props.deleteItem(this.props.text);
  }
  render() {
    return (
      <li
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {this.props.text}
        <button
          onClick={this.deleteItem}
          style={{ padding: "0 10px", cursor: "pointer" }}
        >
          X
        </button>
      </li>
    );
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
