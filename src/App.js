import "./App.css";
import {hello} from "./component/hello";

function App() {
  return (
    <div>
      {hello}
      {hello}
      <img src={require("./cat.jpg")} alt="profile" />
    </div>
  )
}

export default App;
