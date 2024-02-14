import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

function App() {
	return (
		<BrowserRouter>
		<Routes>
			<Route path='/' element={<h1 className='text-4xl font-bold'>Hello Page</h1>}/>
			<Route path='/login' element={<LoginPage/>}/>
			<Route path='/register' element={<RegisterPage/>}/>
			<Route path='/tasks' element={<h1 className='text-4xl font-bold'>Tasks Page</h1>}/>
			<Route path='/add-task' element={<h1 className='text-4xl font-bold'>Add Task</h1>}/>
			<Route path='/task/:id' element={<h1 className='text-4xl font-bold'>Update Task</h1>}/>
			<Route path='/task/:profile' element={<h1 className='text-4xl font-bold'>Profile</h1>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App;