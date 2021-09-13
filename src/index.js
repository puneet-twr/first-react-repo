import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
// import StudentState from './studentComp';
// const el = <h1>Hello Puneet</h1>;

// ReactDOM.render(<Student name="Jack" />, document.getElementById('root'));

// using state
// ReactDOM.render(<StudentState roll={22+100}></StudentState>, document.getElementById("root"));


//Dev ed tutorial
ReactDOM.render(<App></App>, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
