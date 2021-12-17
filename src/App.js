import "./App.css";
import {hello} from "./component/hello";
import {createElementPrac} from  "./component/createElementPrac"

function App() {
  return (
    <div id="Main">
      {hello}
      {hello}
      {createElementPrac}
      <img src={require("./cat.jpg")} alt="profile" />
    </div>
  )
}

export default App;
