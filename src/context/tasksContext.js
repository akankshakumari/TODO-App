import { createContext, useState } from "react";

export const TasksContext = createContext({
    tasks: []
})

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);
    const value = {tasks, setTasks};

    return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}