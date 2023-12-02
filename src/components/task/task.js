import { useContext, useState } from 'react';
import './task.scss'
import { TasksContext } from '../../context/tasksContext';

export const Task = ({task}) => {
    const { tasks, setTasks } = useContext(TasksContext);

    const onClickCheckbox = () => {
        const newTasksList = tasks.filter((taskitem) => taskitem !== task);
        setTasks(newTasksList);
    }

    return (
        <div className="task-container">
            <input 
                className='task-complete-checkbox' 
                type='checkbox'
                onClick={onClickCheckbox}
            />
            {task}
        </div>
    )
}