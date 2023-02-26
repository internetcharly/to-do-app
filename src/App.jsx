import { useState } from 'react'
import './App.css'
import { TaskCard } from './components/TaskCard'

function App() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem('taskList')) || []
	)

	return (
		<div className='h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-teal-100'>
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
