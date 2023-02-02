import { useState } from 'react'
import './App.css'
import { InputTask } from './components/InputTask'
import { TaskCard } from './components/TaskCard'

function App() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem('taskList')) || []
	)

	return (
		<main className='dark:bg-slate-800 h-screen'>
			<h1 className='font-mono text-center text-4xl text-white pt-10'>To-do</h1>
			<div className='flex flex-col'>
				<InputTask tasks={tasks} setTasks={setTasks} />
				<TaskCard tasks={tasks} setTasks={setTasks} />
			</div>
		</main>
	)
}

export default App
