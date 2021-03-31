// eslint-disable-next-line no-unused-vars
import {lazy,Suspense} from 'react'
// eslint-disable-next-line no-unused-vars
import Fncompomemt from './pages/fnComponent/Fncomponent';
import './style.css';
import 'antd/dist/antd.css';
import "./App.less";
import Header from './pages/header'
// eslint-disable-next-line no-unused-vars
import {Link, Route, Redirect} from 'react-router-dom';
import MyNavLink from './components/MyNavLink';
import Loading from './components/loading';
import Basic from './pages/basic';

// 使用懒加载
// import GoodsListComponent from "./pages/goods";
// import CounterComponent from './pages/router';
// import RouterComponent from './pages/counter';

// lazy 必须要和 Suspense 一起使用，不然就会编译报错。
const GoodsListComponent = lazy(() => import('./pages/goods'));
const CounterComponent = lazy(() => import('./pages/counter'));
const RouterComponent = lazy(() => import('./pages/router'));

function App() {
    return (
		<div className="App">
            <Header></Header>
            <div className="content">
                <div className="router">
					{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
					{/* <Link className="Link-item" to="/goods">商品列表</Link>
                    <Link className="Link-item" to="/function">函数式组件</Link> */}

                    {/* 在React中靠路由链接实现切换组件--编写路由链接, 使用anvlink 可以设置动态路由的样式 */}
                    <MyNavLink to="/basic">基础</MyNavLink>
                    <MyNavLink to="/router">路由组件</MyNavLink>
                    <MyNavLink to="/goods">商品列表</MyNavLink>
                    <MyNavLink to="/redux">Redux</MyNavLink>
                    <MyNavLink to="/function">函数式组件</MyNavLink>
                </div>
                <div className="wrap">
                    <Suspense fallback={<Loading/>}>
                        {/* 注册路由 */}
                        <Route path="/basic" component={Basic}/>
                        <Route path="/function" component={Fncompomemt}/>
                        <Route path="/goods" component={GoodsListComponent}/>
                        <Route path="/redux" component={CounterComponent}/>
                        <Route path="/router" component={RouterComponent}/>
                        <Redirect to="/function"/>
                    </Suspense>
                </div>
            </div>
		</div>
	)
}

export default App
