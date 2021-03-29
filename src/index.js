import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store';
import {Provider} from 'react-redux';

ReactDOM.render(
    /* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
    
	<BrowserRouter>
        <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
