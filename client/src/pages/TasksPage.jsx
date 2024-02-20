import React from 'react'
import { useAuth } from '../context/AuthContext.jsx';

function TasksPage() {
	const { user } = useAuth();
	console.log(user);
	return (
		<div>TasksPage</div>
	)
}

export default TasksPage;