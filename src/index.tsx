import ReactDOM from "react-dom/client";

// components start
import App from "./App";

// components end
// extensions start
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// extensions end

// redux start
import store from "./redux/store/store";
// redux end

// style start
import "./App.css";
// style end

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
