import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const Notes = ({notes,handleDeleteNote}) => {

  return (
    <div className='hover:scale-105 mx-4 p-4 min-h-64 w-80 rounded-lg bg-green-500 flex-col flex justify-between shadow-black shadow-lg'>
        <div         className='w-72 h-58 overflow-hidden text-ellipsis font-bold'
        style={{ 
          wordWrap: 'break-word', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          display: '-webkit-box',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
          whiteSpace:'pre-wrap' }}>
            {notes.desc}
        </div>
        <div className='footer  flex justify-between'>
            {notes.date}
            <MdDeleteForever onClick={()=>handleDeleteNote(notes.id)} className='hover:scale-125'/>
        </div>
    </div>
  )
}

export default Notes
