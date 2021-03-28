import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Button } from 'antd';
import PubSub from 'pubsub-js'

export default class List extends Component {
   
    // PropTypes 可以限定 props 中的数据类型；
    static spropTypes = {
        goods: PropTypes.string.isRequired
    }
    state = {
        list: []
    }

    async fetchRequest() {
        // fetch 用法介绍 https://www.cnblogs.com/zhuzhenwei918/p/7249691.html
        const res = await fetch('http://localhost:5210/api1/students');
        const data = await res.json();
        return data;
    }

    getList = () => {

        // 方法一：利用axios请求数据
        // axios.get('http://localhost:5210/api1/students').then(
        //     response => {
        //         console.log('成功了',response.data);
        //         this.setState({list: response.data});
        //     },
		// 	error => {console.log('失败了',error);}
        // )

        // 方法二：利用fetch请求数据；fetch() 返回的是一个Promise对象。fetch使用的promise对象可以使得我们使用同步的方式写异步函数。
        /*
            fetch('http://localhost:5210/api1/students').then(
            response => {
                console.log('联系服务器成功了');
				return response.json()
            },
            error => {
                console.log('失败了',error);
            }
            ).then(
                response => {console.log('获取数据成功了',response);},
                error => {console.log('获取数据失败了',error);}
            )
        */

        // 还可以利用 async 与 await 优化代码。
        
        this.fetchRequest().then(data =>{
            console.log(data);
            this.setState({list:data});
            PubSub.publish('list-data',{res: data})
        }).catch(reason => {
            console.log(reason.message);
        })
        

        // 方法三；利用xmlHttpRequest 请求；
        /**
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:5210/api1/students');
            xhr.responseType = 'json';
            xhr.onload = function() {
                console.log(xhr.response);
            };
            xhr.onerror = function() {
                console.log("Oops, error");
            };
            xhr.send();
         */
       
    }

    render() {
        // console.log(this);
        const {goods} = this.props;
        const {list} = this.state;
        return (
            <div>
                <h4>
                    三种实现请求goodslist的方式
                </h4>
                <div>
                    来自父组件的===》{goods}
                </div>
                {
                   list.map(m => {
                       return (
                            <div key={m.id} className="goods">
                                {m.name}
                            </div>
                       )
                   })
                }
                <Button type="primary" onClick={this.getList}>获取list列表</Button>
                hello 商品清单...
            </div>
        )
    }
}
