import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { TodosStoreProvider } from "./stores/todosStore";

render(
  <TodosStoreProvider>
    <App />
  </TodosStoreProvider>,
  document.getElementById("root")
);
