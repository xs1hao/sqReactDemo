import Counter from './components/counter/index';
import Fncompomemt from './components/fnComponent/Fncomponent';
import './style.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';

function App() {
    const student = {name: '小明',age: 12, sex: '男'}
    return (
		<div className="App">
            <Button type="primary">Primary Button</Button>
            {/* 函数式组件 */}
			<Fncompomemt />
            {/* 类式组件 */}
			<Counter count={2} {...student} />
		</div>
	)
}

export default App
