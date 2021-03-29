import React, { Component } from 'react';
import {Button} from 'antd';
import {withRouter} from 'react-router-dom';
import './index.less'

class Header extends Component {
    goBack = () => {
        this.props.history.goBack();
    }
    // 使用 withRouter 在组件中使用路由功能；
    // 作用是将一个组件包裹进Route里面, 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中.
    render() {
        return (
            <div className="header">
                <h3 className="h3">
                    我的react 学习demo...
                </h3>
                <Button onClick={this.goBack} type="primary">
                    返回上一级
                </Button>
            </div>
        )
    }
}

export default withRouter(Header)
