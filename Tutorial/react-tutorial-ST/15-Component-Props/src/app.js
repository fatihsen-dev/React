class TodoApp extends React.Component {
  render() {
    const app = {
      title: "Todo Application",
      desc: "Lorem, ipsum dolor.",
      items: ["Chicken", "Cow", "Pih", "Dog", "Cat"],
    };
    return (
      <div>
        <Header title={app.title} desc={app.desc} />
        <TodoList items={app.items} />
        <TodoInput />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((liText, index) => (
          <TodoItem key={index} text={liText} />
        ))}
      </ul>
    );
  }
}
class TodoItem extends React.Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}
class TodoInput extends React.Component {
  render() {
    return (
      <div>
        <p>
          <button>Clear todo</button>
        </p>
        <form>
          <input type='text' />
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    );
  }
}

//? Fuction props
// let Header = function (props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <div>{props.desc}</div>
//     </div>
//   );
// };

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
