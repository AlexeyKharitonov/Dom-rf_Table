import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CheckBoxProvider } from "./Context/UseCheckBox.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CheckBoxProvider>
    <App />
  </CheckBoxProvider>
);
