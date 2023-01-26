import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//import Home from"./Pages/home";
import Header from "./Components/Header";
import NotesList from "./Pages/NotesList";
import Note from "./Pages/Note";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/note/:id" element={<Note />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//<Route path="/" element={<Home />} />;
