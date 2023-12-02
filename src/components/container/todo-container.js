import { useContext } from 'react';
import { InputTask } from '../input-task/input-task';
import { TaskList } from '../task-list/task-list';
import './todo-container.scss';
import { TasksContext } from '../../context/tasksContext';

export const TodoContainer = () => {
    const { tasks } = useContext(TasksContext);

    return (
        <div className="todo-container">
            <h1 className="header">TODO App</h1>
            <InputTask />
            {tasks.length > 0 && <TaskList />}
        </div>
    )
}