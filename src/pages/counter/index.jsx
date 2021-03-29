import React, { Component } from 'react';
import { Button } from 'antd';
import './counter.less';
//引入action
import {
	increment,
	decrement,
	incrementAsync
} from '../../redux/actions/count'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

class Counter extends Component {

    addCount = () => {
        this.props.increment(1)
    }
    decreaseCount = () => {
        this.props.decrement(1)
    }
    incrementAsync = ()=>{
		this.props.incrementAsync(1,500)
	}

    render() {
        return (
            <div className="counter-wrap">
                <div className="result">
                    计算的结果为：{this.props.count}
                </div>
                <Button type="primary" onClick={this.addCount}>点我加1</Button>
                <Button type="primary" onClick={this.decreaseCount}>点我减1</Button>
                <Button type="primary" onClick={this.incrementAsync}>异步加1</Button>
            </div>
        )
    }
}
//使用connect()()创建并暴露一个Count的容器组件; 参数是 action 
export default connect(
	state => ({
		count:state.count
	}),
	{increment,decrement,incrementAsync}
)(Counter)
