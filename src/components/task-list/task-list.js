import { useContext } from 'react'
import { Task } from '../task/task'
import './task-list.scss'
import { TasksContext } from '../../context/tasksContext'

export const TaskList = () => {
    const { tasks } = useContext(TasksContext);

    return (
        <div className='task-list-container'>
            {tasks.map((task, index) => {
                return <Task key={index} task={task} />
            })}
        </div>
    )
}