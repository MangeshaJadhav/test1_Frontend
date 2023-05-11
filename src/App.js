import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import HomePage from "./component/Home/HomePage";

function App() {
  return (
    <div className="App">
      {" "}
      <>
        {
          <BrowserRouter>
            <Routes>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/" element={<Login />}></Route>
              <Route path="/home" element={<HomePage />}></Route>
              <Route path="*" element={<h1>404</h1>}></Route>
            </Routes>
          </BrowserRouter>
        }
      </>{" "}
    </div>
  );
}

export default App;
