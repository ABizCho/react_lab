import "./App.css";
import {hello} from "./component/hello";

function App() {
  return (
    <div id="Main">
      {hello}
      {hello}
      <img src={require("./cat.jpg")} alt="profile" />
    </div>
  )
}

export default App;
