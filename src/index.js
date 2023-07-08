import React from "react";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import './styles/app.scss';

import TodoApp from "./components/TodoApp";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>
);  
