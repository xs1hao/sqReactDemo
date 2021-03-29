import React, {Component} from "react";
import List from "./list/list"
import PubSub from 'pubsub-js'
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
// import { Button } from "antd";


export default class Goods extends Component {
    
    state = {list: '很多的商品'}
    myRef = React.createRef();
    content$ = new BehaviorSubject(null);
    
    componentDidMount() {
        this.subscribe = PubSub.subscribe('list-data',(eve,res) => {
            console.log(eve,res);
        });

        this.inputContenSub = this.content$.pipe(debounceTime(1000)).subscribe(res => {
            if (!res) {
                return;
            }
            console.log('content$:',res);
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.subscribe);
        // this.inputContenSub.unsubscribe();
    }

    showInputValue = () => {
        // 方法1：（字符串形式的 ref官方已经不建议这么做了） console.log(this.refs) // 字符串形式的 ref 已经不建议在继续使用；
        // console.log(this.myRef.current.value);

        // 方法3： 通过在this上绑定 input 属性读取 input输入的值；
        const {input1} = this;
        console.log(input1.value);

    }

    saveInput = (c) => {
        this.input1 = c;
        console.log('@',c);
    }

    shouOnput = (e) =>{
        this.content$.next(e.target.value);
    }

    render() {
        console.log('state',this.props);
        const {state} = this.props.location;
        console.log('goods--state:',state); // 函数式路由导航，参数可以不展示在 url 里面；
        return (
            <div>
                <h3 className="h3">
                    测试 ref和rxjs 
                </h3>
                <div>
                    {/* {this.state.list} */}
                    {/* 字符串形式的ref */}
                    {/* <input type="text" ref="inpu1" /> */}

                    {/* 使用 React.createRef() 创建ref */}
                    {/* <input type="text" ref={this.myRef} /> */}

                    {/* 使用回调形式创建ref */}
                    {/* <input type="text" ref={this.saveInput} /> */}
                    {/* <input type="text" ref={c => this.input1 = c} /> */}
                    {/* <Button type="primary" onClick={this.showInputValue}>打印input</Button> */}

                    {/* 也可以使用事件源 target拿到值 */}
                    <input className="input" type="text" onChange={this.shouOnput} />
                </div>
                <List goods={this.state.list}></List>
            </div>
        )
    }
}
