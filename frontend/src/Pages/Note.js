import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Note = ({ match }) => {
  const { id } = useParams()
  let noteId = id
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    if (noteId === "new") return;

    let response = await fetch(`/api/notes/${noteId}/`);
    let data = await response.json();
    setNote(data);
  };

  return (
    <div>
      <h1>Single Note : {noteId}</h1>
    </div>
  );
};

export default Note;
