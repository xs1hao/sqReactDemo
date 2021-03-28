import React, { Component } from 'react';
import { Button } from 'antd';
import './counter.less';

export default class Counter extends Component {
    constructor(props){
        super(props);
        // console.log('counter:',this);
        // console.log(this.props);
        this.count = this.props.count; 
    }
    state = {res: 0};
    addCount = (res) => {
        // const {res} = this.state;
        return () => {
            this.setState({res: res + 1})
        }
    }
    decreaseCount = () => {
        const {res} = this.state;
        this.setState({res: res - 1})
    }
    render() {
        const {count} = this.props;
        const {res} = this.state;
        return (
            <div className="counter-wrap">
                <div className="result">
                    计算的结果为：{res}
                    <br/>
                    另一种取值方式: {this.state.res}
                </div>
                <Button type="primary" onClick={this.addCount(res)}>点我加</Button>
                <Button type="primary" onClick={this.decreaseCount}>点我减</Button>
                <h5>
                    我在counter组件中。{count} 是从父组件传过来的。
                </h5>
                <div className="student">
                    姓名： {this.props.name}, 年龄： {this.props.age}
                </div>
                
            </div>
        )
    }
}
