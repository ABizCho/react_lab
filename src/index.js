import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render( // 바로 이 ReactDOM.render( render 대상 element , document.getElementById('root')) 를 사용하여 element를 REACT ROOT DOM에 전달할 수 있다.
<App />,// RENDER 대상 element
document.getElementById("root") // root dom id - ./public/index.html 내부의 id='root'로 전달됨
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
