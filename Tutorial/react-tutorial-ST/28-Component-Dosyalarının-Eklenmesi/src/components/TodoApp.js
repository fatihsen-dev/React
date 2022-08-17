import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

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
          width: "400px",
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

export default TodoApp;
