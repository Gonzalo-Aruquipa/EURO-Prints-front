import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { AppTheme } from "./theme";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <AppTheme>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<Sidebar ss={<Users/>} />} />
          </Routes>
        </AppTheme>
      </Router>
    </>
  );
}

export default App;
