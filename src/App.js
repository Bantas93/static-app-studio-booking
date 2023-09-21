import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
// import Dashboard from "./Components/Dashboard";
import AppBooking from "./Components/AppBooking";
function App() {
  return (
    <Router>
      <>
        <div>
          <Routes>
            <Navbar />
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/" element={<AppBooking />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
