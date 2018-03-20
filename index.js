import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import Router from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./css/bulma.css";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
