
import React from "react";
import './../styles/App.css';
var ans = "";
const inputElem = document.getElementById('input');
inputElem.addEventListener('input', handleSearchInput);
function handleSearchInput(event){
    const val =  event.target.value;
    ans = val;

}
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <input class="custom-placeholder" id="input" type="text"></input>
        if{ans != ""}
        {
          <p>Hello {ans}!</p>
        }
    </div>
  )
}

export default App
