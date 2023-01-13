import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import router from "./router/index";
import { RouterProvider } from "react-router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
