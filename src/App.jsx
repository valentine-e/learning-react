import "./App.css";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, NavLink, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="page-container">
      <Header />
      <Aside />
      <div className="main-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs />} />
        </Routes>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/dialogs">Dialogs</NavLink>
      </div>
    </div>
  );
};

export default App;
