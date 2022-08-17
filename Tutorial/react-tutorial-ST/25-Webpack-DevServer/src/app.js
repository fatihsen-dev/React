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

  componentDidMount() {
    const json = localStorage.getItem("items");
    const itemsParse = JSON.parse(json);

    if (itemsParse) {
      this.setState({
        items: itemsParse,
      });
    }
  }

  componentWillUnmount() {
    console.log("Component silindi.");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      const json = JSON.stringify(this.state.items);
      localStorage.setItem("items", json);
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

// fonksiyonel components
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.desc}</div>
    </div>
  );
};
const TodoList = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {props.items.map((liText, index) => (
          <TodoItem deleteItem={props.deleteItem} key={index} text={liText} />
        ))}
      </ul>
      <button
        style={{ padding: "4px 0", cursor: "pointer" }}
        onClick={props.clearItems}
      >
        Clear
      </button>
    </div>
  );
};
const TodoItem = (props) => {
  return (
    <li
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      {props.text}
      <button
        onClick={() => {
          props.deleteItem(props.text);
        }}
        style={{ padding: "0 10px", cursor: "pointer" }}
      >
        X
      </button>
    </li>
  );
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<TodoApp />);
