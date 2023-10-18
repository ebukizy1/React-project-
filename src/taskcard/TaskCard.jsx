import React from 'react'
import { DeleteStyle, ListStyle } from '../style/Calculate'


export const TaskCard = ({task, handleDelete, newValue}) => {
  return (
    <ListStyle
   isComplete={task.isComplete}> 
    <span>{task.id} - {task.name} - {newValue}</span>
    <DeleteStyle onClick={()=> handleDelete(task.id)}>delete</DeleteStyle>
    </ListStyle>
  )
}
