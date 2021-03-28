const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('有人请求服务器1了');
	console.log('请求来自于',request.get('Host'));
	console.log('请求的地址',request.url);
	next()
})

app.get('/students',(request,response)=>{
	const students = [
        {id:'001',name:'苹果',price:18},
		{id:'003',name:'香蕉',price:120},
        {id:'002',name:'橘子',price:19},
	]
	response.send(students)
})

app.listen(5000,(err)=>{
	if(!err) console.log('服务器1启动成功了,请求学生信息地址为：http://localhost:5000/students');
})
