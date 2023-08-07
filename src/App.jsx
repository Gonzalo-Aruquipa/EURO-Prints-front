import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AppTheme } from "./theme";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { Clients } from "./components/Clients";
import { Products } from "./components/Products";
import { Login } from "./components/Login";
import { NewUser } from "./components/NewUser";
import { NewClient } from "./components/NewClient";

function App() {
  return (
    <>
      <Router>
        <AppTheme>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/new-user" element={<NewUser />} />
            <Route exact path="/clients" element={<Clients />} />
            <Route exact path="/new-client" element={<NewClient />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </AppTheme>
      </Router>
    </>
  );
}

export default App;
