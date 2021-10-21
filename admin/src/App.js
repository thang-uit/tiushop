import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const clickMe = () => toast("Hello ReactJS!");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello ReactJS. This is my first project!</p>
        <button onClick={clickMe}>Click Me!</button>
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
