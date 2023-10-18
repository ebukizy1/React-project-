import React from 'react'
import { useState } from 'react'
import { HeaderStyle,  ToggleButtonStyle } from '../style/Calculate';
import { TaskCard } from '../taskcard/TaskCard';


export function TaskList({tasking}) {

    const [task, setTask] = useState([
        { id: 122, name: 'java study', isCompleted: true },
        { id: 333, name: 'python study', isCompleted: true },
        { id: 444, name: 'javascript study', isCompleted: false },
      ]); 
        
    const [show, setShow] = useState(true);

    const handleDelete=(id)=>{
        setTask(task.filter(task => task.id !== id));

    }

  return (
    <div>
        <HeaderStyle> Task List </HeaderStyle> 
        <ul>
            <ToggleButtonStyle onClick={()=>setShow(!show)}> Toggle</ToggleButtonStyle>
            {show &&  
               task.map((task)=>(
               <TaskCard newValue={tasking} key={task.id}  task={task} handleDelete={handleDelete}/>
            ))};
        </ul>

    </div>
  )
}



