import { Route, Routes } from "react-router-dom";
import "./index.css";
import Desktop from "./pages/Home/Homepage";
import Desination from "./pages/Destination/Desination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/destination" element ={<Desination/>} />
      <Route path="/crew" element = {<Crew />} />
      <Route path="/technology" element = {<Technology />} />
    </Routes>
  );
};

export default App;
