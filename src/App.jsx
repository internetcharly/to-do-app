import { useState } from 'react'
import './App.css'
import { TaskCard } from './components/TaskCard'

function App() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem('taskList')) || []
	)

	return (
		<div className='dark:bg-slate-800 h-screen'>
			<header>
				<h1 className='font-mono text-center text-4xl text-white pt-10'>
					To-do
				</h1>
			</header>
			<main className='font-mono text-center text-xl text-white pt-5'>
				<TaskCard tasks={tasks} setTasks={setTasks} />
			</main>
		</div>
	)
}

export default App
