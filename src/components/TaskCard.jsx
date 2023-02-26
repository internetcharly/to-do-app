import { CheckCircleIcon, TrashIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export function TaskCard() {
	const [tasks, setTasks] = useState([])
	const [newTask, setNewTask] = useState('')

	const handleInputChange = (event) => {
		setNewTask(event.target.value)
	}

	const handleAddTask = (event) => {
		event.preventDefault()
		if (newTask === '') return
		setTasks([...tasks, { text: newTask, completed: false }])
		setNewTask('')
	}

	const handleCompleteTask = (index) => {
		const newTasks = [...tasks]
		newTasks[index].completed = true
		setTasks(newTasks)
	}

	const handleDeleteTask = (index) => {
		const newTasks = [...tasks]
		newTasks.splice(index, 1)
		setTasks(newTasks)
	}

	return (
		<div className='flex flex-col items-center justify-center'>
			<form
				onSubmit={handleAddTask}
				className='bg-white rounded-lg shadow-lg p-4 flex items-center mb-4 w-96'
			>
				<input
					type='text'
					placeholder='Enter task'
					className='border-gray-300 border rounded-lg py-2 px-4 w-full mr-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500'
					value={newTask}
					onChange={handleInputChange}
				/>
				<button
					type='submit'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				>
					Add
				</button>
			</form>
			<ul className='bg-white rounded-lg shadow-lg p-4 max-h-96 overflow-y-auto w-96 text-gray-500 text-left'>
				{tasks.map((task, index) => (
					<li
						key={index}
						className='border-gray-300 border-b py-2 px-4 flex justify-between items-center'
					>
						<div
							className={`${
								task.completed ? 'text-gray-500 line-through' : ''
							} break-all`}
						>
							{task.text}
						</div>
						<div>
							<button
								onClick={() => handleCompleteTask(index)}
								className='text-gray-500 hover:text-green-600'
							>
								<CheckCircleIcon className='h-5 w-5' />
							</button>
							<button
								onClick={() => handleDeleteTask(index)}
								className='text-gray-500 hover:text-red-600 ml-2'
							>
								<TrashIcon className='h-5 w-5' />
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
