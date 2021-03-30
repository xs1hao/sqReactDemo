
import React from 'react'
import ReactDOM from 'react-dom'

export default function Fncompomemt() {

    const [count,setCount] = React.useState(0)
	const myRef = React.useRef()

    /**
     * React.useEffect 
     * 给函数组件增加了数据获取、订阅或者手动修改过 DOM的能力
     * 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途;
     * **/
	React.useEffect(()=>{
		let timer = setInterval(()=>{
			setCount(count => count+1 )
		},1000)
		return ()=>{
			clearInterval(timer)
		}
	},[])

	//加的回调
	function add(){
		//setCount(count+1) //第一种写法
		setCount(count => count+1 )
	}

	//提示输入的回调
	function show(){
		alert(myRef.current.value)
	}

	//卸载组件的回调
	function unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	return (
		<div>
            <a href="https://zh-hans.reactjs.org/docs/hooks-intro.html" target="blank">Hook 简介</a>
			<input type="text" ref={myRef}/>
			<h2>当前求和为：{count}</h2>
			<button onClick={add}>点我+1</button>
			<button onClick={unmount}>卸载组件</button>
			<button onClick={show}>点我提示数据</button>
		</div>
	)
}