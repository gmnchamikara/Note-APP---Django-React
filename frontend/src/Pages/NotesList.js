import React, { useState, useEffect } from "react";
import ListItem from "../Components/ListItem";

const Note = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
      getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();
    setNotes(data);
  };

  return (
    <div className='="notes-list"'>
      <h2>this is note list</h2>
      {notes.map((note, index) => (
        <ListItem key={index} note={note} />
      ))}
    </div>
  );
};

export default Note;
