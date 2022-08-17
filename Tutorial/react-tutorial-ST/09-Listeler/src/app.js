const root = document.getElementById("root");

let items = {
  title: "Todo Application",
  item: ["item 1", "item 2", "item 3 "],
};

function formSubmit(event) {
  event.preventDefault();
  let txtItemValue = event.target.elements.txtItem.value;
  if (txtItemValue) {
    items.item.push(txtItemValue);
    txtItemValue = event.target.elements.txtItem.value = "";
    console.log(items.item);
    render();
  }
}

let listStyle = {
  border: "1px solid #222",
  padding: "6px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  marginTop: "4px",
};
let itemStyle = {
  padding: "4px",
  background: "#222",
  color: "#eee",
  cursor: "pointer",
  borderRadius: "2px",
};

function clearItems() {
  items.item = [];
  render();
}

function render() {
  let template = (
    <div>
      <form onSubmit={formSubmit}>
        <input type='text' name='txtItem' />
        <button type='submit' style={{ marginLeft: "4px", cursor: "pointer" }}>
          Add Item
        </button>
      </form>
      <ul id='list' style={listStyle}>
        <h2>{items.title}</h2>
        {/* listelemede key belirtmelisiniz */}
        {items.item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {items.item.length > 0 ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b>{items.item.length}</b>
            <button style={{ cursor: "pointer" }} onClick={clearItems}>
              Clear
            </button>
          </div>
        ) : undefined}
      </ul>
    </div>
  );
  ReactDOM.createRoot(root).render(template);
}
render();
