
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

//暴露store; applyMiddleware方法主要是对redux的dispacth方法进行封装;
/**
 * Redux applyMiddleware 原理剖析
 * https://blog.csdn.net/tzllxya/article/details/93508220
 * 
 * react 实践之 redux applyMiddleware方法详解
 * https://segmentfault.com/a/1190000008754562
 * 
 * */
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));