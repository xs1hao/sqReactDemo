import Counter from './components/counter/index';
import Fncompomemt from './components/fnComponent/Fncomponent';
import './style.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';

function App() {
	return (
		<div className="App">
            <Button type="primary">Primary Button</Button>
            {/* 函数式组件 */}
			<Fncompomemt />
            {/* 类式组件 */}
			<Counter />
		</div>
	)
}

export default App
