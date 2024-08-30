import React, { useState } from 'react';

const AddNote = ({ handleAddNote}) => {

  const[text,setText] = useState('');

  const handleChange =(event) =>{
    if(200 - event.target.value.length >=0){
      setText(event.target.value);
    }
    
  }

  const handleSave = () =>{
    if(text.trim().length>0){
      handleAddNote(text);
      setText('');
    }
    
    
  }


  return (
    <div className='z-[5] mx-4 p-4 min-h-64 w-80 rounded-lg bg-[#ffff66] flex-col flex justify-between'>
        <div className='text-area '>
            <textarea className=" w-72 h-58 border-0 resize-none focus:ring-0 bg-transparent"
             rows="8" 
             cols="10" 
             value={text}
             placeholder='type here.....'
             onChange={handleChange}></textarea>
        </div>
        <div className='footer  flex justify-between'>
            <span>{200 - text.length} remaining</span>
            <button onClick={handleSave} className='bg-blue-600 text-white hover:scale-105 rounded-lg px-1'>Save</button>
        </div>
    </div>
  )
}

export default AddNote
