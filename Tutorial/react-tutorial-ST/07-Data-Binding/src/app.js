const root = document.getElementById("root");

// JSX
let template =<div>
  <h1 id="header">Hello world</h1>
  <div>Lorem ipsum dolor.</div>
  <ul>
    <li>Lorem ipsum.</li>
    <li>Lorem ipsum.</li>
    <li>Lorem ipsum.</li>
  </ul>
</div>

let btnOneClassName = "btnRed";
let btnMinusClassName = "btnBlue";

let number = 0;

function addOne(){
  number ++;
  renderApp()
  console.clear()
}
function minusOne(){
  number --;
  renderApp()
  console.clear()
}


function renderApp() {
  let template2 =(
      <div>
        <h1>Number: {number}</h1>
        <button id="btnPlus" className={btnOneClassName} onClick={addOne}>+1</button>
        <button id="btnMinus" className={btnMinusClassName} onClick={minusOne}>-1</button>
      </div>
  )
  ReactDOM.render(template2, root);
}

function tick() {
  var element =(
      <div>
        <h2>Time is: {new Date().toLocaleTimeString()}</h2>
      </div>
  )
  ReactDOM.render(element,root)
  console.clear()
}
tick();
setInterval(tick,1000)

// renderApp()
