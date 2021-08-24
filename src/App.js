import Navbar from "../src/components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "../src/components/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
