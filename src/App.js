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
          <Navbar />
          <Routes>
            <Route path="/" element={<AppBooking />} />
            {/* <Route path="/" element={<Dashboard />} /> */}
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
