import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Surprise from './Surprise';
import Joke from './Joke';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
    <div id="body">
        <div id = "surprise">
            <Surprise />
        </div>
        <App />
        <div id = "joke">
          <Joke />
        </div>
    </div>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
