import { nanoid } from 'nanoid';
import { useEffect, useState } from "react";
import AddNote from "./Components/AddNote";
import Navbar from './Components/Navbar';
import Notes from "./Components/Notes";


function App() {
  const [notes,setNotes] = useState(()=>{

    const savedNotes = localStorage.getItem('react-notes-data');
    return savedNotes ? JSON.parse(savedNotes) : [];
});

  const addNote =(noteText)=>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      desc: noteText,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);

  };

  const deleteNote =(id)=>{

    const newNotes = notes.filter((note)=>note.id!==id);
    setNotes(newNotes);
  };

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'));

    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);

  useEffect(()=>{

    localStorage.setItem('react-notes-data', JSON.stringify(notes));

  },[notes]);



  return (
    <div>

      <Navbar/>
    <div className='py-12 min-h-screen bg-gray-300 px-10 grid gap-6 place-content-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ' >
    
      {notes.map((note)=>{
        return(
        <Notes notes={note} handleDeleteNote={deleteNote}/>
        )
      })}
      <AddNote  handleAddNote={addNote}/>

    </div>
    </div>
    
  )
}

export default App
