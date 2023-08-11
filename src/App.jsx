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
import { NewProduct } from "./components/NewProduct";
import { NewPrint } from "./components/NewPrint";
import { Provider } from "react-redux";
import store from "./redux/store";
import { UpdateUser } from "./components/UpdateUser";

function App() {
  return (
    <>
      <Router>
      <Provider store={store}>
        <AppTheme>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/new-user" element={<NewUser />} />
            <Route exact path="/update-user/:id" element={<UpdateUser />} />
            <Route exact path="/clients" element={<Clients />} />
            <Route exact path="/new-client" element={<NewClient />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/new-product" element={<NewProduct />} />
            <Route exact path="/new-print" element={<NewPrint/>} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </AppTheme>
        </Provider>
      </Router>
    </>
  );
}

export default App;
