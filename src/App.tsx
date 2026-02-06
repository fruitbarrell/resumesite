import './App.css'
import {Home} from "./Home";
import {Skills} from "./Skills";
import {BrowserRouter as Router,Link, Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Link to="/Home">Home</Link>
        <Link to="/Skills">Skills</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
