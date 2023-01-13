import "./styles/App.css";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Outlet />
    </div>
  );
}

export default App;
