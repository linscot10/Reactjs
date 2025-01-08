import React, { useState } from 'react'

const ToDoApp = () => {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask("");
        }
    }

    const toggleComplete = (index) => {
        const newTasks = tasks.map((t, i) => i === index ? { ...t, completed: !t.completed } : t);
        setTasks(newTasks);

    }

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks)

    }

    return (
        <div>

            <h1>ToDO List</h1>
            <input
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}

            />

            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((t, index) => (
                    <li key={index} style={{ textDecoration: t.completed ? "line-through" : "none" }}>{t.text}
                        <button onClick={() => toggleComplete(index)}>{t.completed ? "Undo" : "Complete"}</button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoApp