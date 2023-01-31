/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../TaskCard.css'

export function InputTask({ tasks, setTasks }) {
	const [idCounter, setIdCounter] = useState(0)
	const [inputValue, setInputValue] = useState('')
	const handleChange = (e) => {
		setInputValue(e.target.value)
	}

	const handleClick = () => {
		if (inputValue === '') {
			return tasks
		} else {
			setTasks([...tasks, { id: idCounter, description: inputValue }])
		}
		setIdCounter(idCounter + 1)
		setInputValue('')
	}
	return (
		<div>
			<input type='text' value={inputValue} onChange={handleChange} />
			<button onClick={handleClick}>Add new task</button>
		</div>
	)
}
