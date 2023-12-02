import { useContext, useState } from "react"
import { TasksContext } from "../../context/tasksContext";

export const InputTask = () => {
    const [input, setInput] = useState('');
    const { tasks, setTasks } = useContext(TasksContext)

    const onChangeInput = (event) => setInput(event.target.value);

    const onClickCreate = () => {
        setTasks([input, ...tasks]);
        setInput('');
    }

    return (
        <div className="input-task-container">
            <input 
                className="input-task" 
                placeholder="Add task here..." 
                value={input} 
                onChange={onChangeInput} 
            />
            <button 
                className="create-task-button" 
                style={{ height: '20px', width: '60px'}}
                onClick={onClickCreate}
            >
                Create
            </button>
        </div>
    )
}