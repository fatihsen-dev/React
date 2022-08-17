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

let template2 =(
    <div>
      <h1>Number: {number}</h1>
      <button id="btnPlus" className={btnOneClassName} onClick={()=> {
        number ++;
        console.log(number)
      }}>+1</button>
      <button id="btnMinus" className={btnMinusClassName} onClick={()=> {
        number --;
        console.log(number)
      }}>-1</button>
    </div>
)

ReactDOM.render(template2, root);
