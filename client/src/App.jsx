import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
/* pages */
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import TasksPage from './pages/TasksPage.jsx';
import TaskFormPage from './pages/TaskFormPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { TaskProvider } from './context/TasksContext.jsx';

function App() {
	return (
		<AuthProvider>
    <TaskProvider>
		  <BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage/>}/>
					<Route path='/login' element={<LoginPage/>}/>
					<Route path='/register' element={<RegisterPage/>}/>

					<Route element={<ProtectedRoute/>}>
						<Route path='/tasks' element={<TasksPage/>}/>
						<Route path='/add-task' element={<TaskFormPage/>}/>
						<Route path='/tasks/:id' element={<TaskFormPage/>}/>
						<Route path='/task/:profile' element={<ProfilePage/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</TaskProvider>
		</AuthProvider>
	)
}

export default App;