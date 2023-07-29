import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { AppTheme } from "./theme";
function App() {
  return (
    <>
      <Router>
        {/* <AppTheme> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        {/* </AppTheme> */}
      </Router>
    </>
  );
}

export default App;
