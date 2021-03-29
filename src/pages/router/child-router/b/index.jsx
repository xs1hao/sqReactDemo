import React, { Component } from 'react'
import qs from 'querystring'
import {Button} from "antd"

export default class Bcomponent extends Component {

    gotoPreLayer = () => {
        // this.props.history.goBack();
		this.props.history.go(-1);
    }
    
    goGoodsList = (id,title) => {
       return () => {
        // 参数在路由上
        // this.props.history.replace(`/goods/${id}/${title}`);
        // this.props.history.replace(`/goods?id=${id}&title=${title}`); // 通过location.search 字符串 取参数

        // 参数不展示在路由上，通过 location.state取参数；
        this.props.history.replace('/goods',{id,title});
        // this.props.history.replace({pathname:'/goods',state:{id,title}});
        // this.props.history.push('/goods',{id,title});
       } 
    }

    render() {
        console.log(this.props);
        const {search} = this.props.location
		const {id,title} = qs.parse(search.slice(1));

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
                <Button type="primary" onClick={this.gotoPreLayer} className="m-r-10">返回上一层</Button>
                <Button type="primary" onClick={this.goGoodsList(2,'xiamengaA')} className="m-r-10">返回商品列表</Button>
            </div>
        )
    }
}
