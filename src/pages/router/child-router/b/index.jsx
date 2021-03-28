import React, { Component } from 'react'
import qs from 'querystring'

export default class Bcomponent extends Component {
    render() {
        console.log(this.props);
        const {search} = this.props.location
		const {id,title} = qs.parse(search.slice(1))
        return (
            <div>
                B 组件中...
                <p>
                    上层组件的样式会作用到下层组件上...
                </p>
                <p>
                    通过路由取到的参数
                </p>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                </ul>
            </div>
        )
    }
}
