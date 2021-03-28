import React, { Component } from 'react'

export default class Acomponent extends Component {
    render() {
        console.log('组件a...:',this.props);
        const {id,title} = this.props.match.params
        return (
            <div>
                A 组件中...
                <p>
                    通过路由取到的参数
                </p>
                <div>
                    Id：{id} 
                </div>
                <div>
                    Title: {title}
                </div>
            </div>
        )
    }
}
