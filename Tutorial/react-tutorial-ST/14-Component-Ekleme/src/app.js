//? component isimleri büyük harf ile başlamalı

//  function örneği
// const Element = function () {
//   return <h1>Hello World</h1>;
// };

// Main conponent
class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
        <TodoInput />
      </div>
    );
  }
}

// components
class TodoHeader extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo Application</h1>
        <div className='desc'>Lorem, ipsum dolor.</div>
      </div>
    );
  }
}
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    );
  }
}
class TodoItem extends React.Component {
  render() {
    return <li>Todo item</li>;
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

// Render
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<TodoApp />);
