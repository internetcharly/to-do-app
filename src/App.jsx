import { useState } from 'react'
import './App.css'
import { InputTask } from './components/InputTask'
import { TaskCard } from './components/TaskCard'

function App() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem('taskList')) || []
	)

	return (
		<main>
			<h1>Task To Do</h1>
			<div className='task-container'>
				<InputTask tasks={tasks} setTasks={setTasks} />
				<TaskCard tasks={tasks} setTasks={setTasks} />
			</div>
		</main>
	)
}

export default App
