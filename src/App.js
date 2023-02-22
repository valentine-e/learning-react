import "./App.css";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Aside />
      <Profile />
    </div>
  );
};

export default App;
