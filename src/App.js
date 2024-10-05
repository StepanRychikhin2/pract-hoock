import './App.css'
import { useState } from 'react'
const App = () => {
	const [value, setValue] = useState(2)
	const [valuew, setValuew] = useState(5)
	const addValue = () => {
		setValue(value + 1)
		setValuew(valuew + 1)
	}
	const minValue = () => {
		setValue(value - 1)
		setValuew(valuew - 1)
	}
	return (
		<div className="App">
			<span>{value}</span>
			<button onClick={addValue}>add</button>
			<button onClick={minValue}>----</button>
			<span>{valuew}</span>
			<button onClick={addValue}>add</button>
			<button onClick={minValue}>----</button>

      
		</div>
	)
}

export default App
