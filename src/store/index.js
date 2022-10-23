import { createStore, applyMiddleware, compose } from "redux";
// 引入thunk中间件(可以让派发的action可以是一个函数)
import thunk from 'redux-thunk'
import cRducer from "./reducer";
// redux-devtools -> 浏览器插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 创建store并传递: 1.reducer(纯函数) 2.StoreEnhancer
const store = createStore(cRducer, composeEnhancers(
  applyMiddleware(thunk)
))
export default store