import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import NotesList from "./Pages/NotesList";
import Note from "./Pages/Note";

function App() {
  return (
    <div className="container dark">
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NotesList />} />
            <Route path="/note/:id" element={<Note />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App; 