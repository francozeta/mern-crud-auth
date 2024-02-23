import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from '../api/tasks.js'

const TaskContent = createContext();

export const useTasks = () => {
	const context = useContext(TaskContent);
	if(!context) {
		throw new Error("useTasks must be used within a TaskProvider")
	}
	return context;

}
export function TaskProvider({children}) {
	const [tasks, setTask] = useState([]);

	const getTasks = async () => {
		try {
			const res = await getTasksRequest();
			setTask(res.data)
		} catch (error) {
			console.error(error);
		}
	}

	const createTask = async (task) => {
		const res = await createTaskRequest(task);
		console.log(res);
	}

	return (
		<TaskContent.Provider value={{
			tasks,
			createTask,
			getTasks
			
		}}>
			{children}
		</TaskContent.Provider>
	)
}