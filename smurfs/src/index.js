import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import addSmurf from "./reducers/addSmurf";


const store = createStore(addSmurf, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
 document.getElementById("root"));
