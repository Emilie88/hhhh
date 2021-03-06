import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//utiliser le Provider pour react
import {Provider} from 'react-redux';
import reducer from './reducers/index';
// import reducer from './reducers/question';
//creation du store
import {createStore} from 'redux';
const store = createStore(reducer);



ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
