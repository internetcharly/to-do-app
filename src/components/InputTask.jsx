/* eslint-disable react/prop-types */
import { useState } from 'react'

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
		<div className='mt-16 w-1/2 min-w-1/2 sm:min-w-1/2 md:min-w-1/2 lg:min-w-3/4 self-center'>
			<div className='relative text-gray-700'>
				<input
					type='text'
					value={inputValue}
					onChange={handleChange}
					className='w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
					placeholder='Write your task here...'
				/>
				<button
					onClick={handleClick}
					className='absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700'
				>
					Add
				</button>
			</div>
		</div>
	)
}
