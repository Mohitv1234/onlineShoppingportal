import './App.css';
import { BrowserRouter as Router,Routes, Switch, Route } from "react-router-dom";
import Navbar from "./component/nav"
import Login from "./component/login"
import Register from "./component/register.js"

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
      </Routes>
    </Router>
  );
}

export default App;