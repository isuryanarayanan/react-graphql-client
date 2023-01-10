import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import NotFound from "../views/404";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="login/" element={<Login />} />
      <Route path="register/" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
