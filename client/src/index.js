import 'materialize-css/dist/css/materialize.min.css'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from './reducers';
import axios from "axios";
window.axios = axios;

const store = createStore(reducers,{},applyMiddleware(reduxThunk));

//Provider is a react component that is aware of change in the state of the app,
//since it contains the "store" element. It informs all of its child components
//that the app`s state has changed, in order to let them rerender themselfs
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector("#root"));

// console.log('stripe key is', process.env.REACT_APP_STRIPE_KEY);
// console.log('enviroment is', process.env.NODE_ENV);
