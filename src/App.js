import "./App.css";
import {hello} from "./component/hello";
import {createElementPrac} from  "./component/createElementPrac"
import cat from "./cat.jpg"

function App() {
  return (
    <div id="Main">
      {hello}
      {hello}
      {createElementPrac}
      <img src={cat} alt="img" />
    </div>
  )
}

export default App;
