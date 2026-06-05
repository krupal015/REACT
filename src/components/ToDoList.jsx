
import React, { useState } from 'react';

const ToDoList = () => {
    const [list, setList] = useState([]);
    const [task, addTask] = useState("")

    const addNewTask = () => {
        setList([...list,task])
        addTask("")
    }

    const handleChange = (event) => {
        addTask(event.target.value);
    }
    
    return (
        <div>
            <h1>To Do List</h1>

            <input type="text" placeholder='Enter your Task' onChange={handleChange} value={task}/>
            <button onClick={addNewTask}>Add Task</button>

            
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;







// import React, { useState } from 'react'

// const ToDoList = () => {

//     const [list, setList] = useState(["1. i want to study 10 hour"]);

//     return (
//         <div>
//             <h1>To do List</h1>
//            <ul>
//              {list.map((l, index) => (<li key={index}>{l}</li>))}
//            </ul>
//             <h1>complete</h1>
//         </div>
//     )
// }

// export default ToDoList
