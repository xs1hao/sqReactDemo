// eslint-disable-next-line no-unused-vars
import Fncompomemt from './pages/fnComponent/Fncomponent';
import './style.css';
import 'antd/dist/antd.css';
import Goods from "./pages/goods";
import "./App.less";
import Header from './pages/header'
// eslint-disable-next-line no-unused-vars
import {Link, Route, Redirect} from 'react-router-dom';
import MyNavLink from './components/MyNavLink';
import Router from './pages/router';
import Counter from './pages/counter';

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
                    <MyNavLink to="/router">路由组件</MyNavLink>
                    <MyNavLink to="/goods">商品列表</MyNavLink>
                    <MyNavLink to="/redux">Redux</MyNavLink>
                    <MyNavLink to="/function">函数式组件</MyNavLink>
                </div>
                <div className="wrap">
                    {/* 注册路由 */}
                    <Route path="/function" component={Fncompomemt}/>
                    <Route path="/goods" component={Goods}/>
                    <Route path="/redux" component={Counter}/>
                    <Route path="/router" component={Router}/>
					<Redirect to="/function"/>
                </div>
            </div>
		</div>
	)
}

export default App
