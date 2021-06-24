import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Route, Switch, Redirect } from 'react-router-dom'
import Acomponent from './child-router/a'
import Bcomponent from './child-router/b'
import './router.less';

export default class Router extends Component {
    render() {
        const message = {id:'03',title:'消息3'};
        return (
            <div>
                <ul style={{display:'flex',borderBottom: '1px solid'}}>
                    <li>
                        <MyNavLink to={`/router/a/${message.id}/${message.title}`}>跳转至a</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to={`/router/b/?id=${message.id}&title=${message.title}`}>跳转至b</MyNavLink>
                    </li>
                </ul>
                {/* 注册路由, Switch保证渲染的唯一性 */}
                <Switch>
                    <Route path="/router/a/:id/:title" component={Acomponent}/>
                    <Route path="/router/b" exact component={Bcomponent}/>
                    <Redirect to={`/router/b/?id=${message.id}&title=${message.title}`}/>
                </Switch>
            </div>
        )
    }
}
