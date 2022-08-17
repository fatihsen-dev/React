"use strict";

var root = document.getElementById("root");
var items = {
  title: "Todo Application",
  item: []
};

function formSubmit(event) {
  event.preventDefault();
  var txtItemValue = event.target.elements.txtItem.value;

  if (txtItemValue) {
    items.item.push(txtItemValue);
    txtItemValue = event.target.elements.txtItem.value = "";
    console.log(items.item);
    render();
  }
}

var listStyle = {
  border: "1px solid #222",
  padding: "6px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  marginTop: "4px"
};
var itemStyle = {
  padding: "4px",
  background: "#222",
  color: "#eee",
  cursor: "pointer",
  borderRadius: "2px"
};

function clearItems() {
  items.item = [];
  render();
}

function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: formSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "txtItem"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      marginLeft: "4px",
      cursor: "pointer"
    }
  }, "Add Item")), /*#__PURE__*/React.createElement("ul", {
    id: "list",
    style: listStyle
  }, /*#__PURE__*/React.createElement("h2", null, items.title), items.item.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      style: itemStyle
    }, item);
  }), items.item.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("b", null, items.item.length), /*#__PURE__*/React.createElement("button", {
    style: {
      cursor: "pointer"
    },
    onClick: clearItems
  }, "Clear")) : undefined));
  ReactDOM.render(template, root);
  console.clear();
}

render();
