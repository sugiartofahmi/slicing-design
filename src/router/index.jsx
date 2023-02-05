import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Beginner from "../views/Beginner";
import Easy from "../views/Easy";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beginner" element={<Beginner />} />
      <Route path="/easy" element={<Easy />} />
    </Routes>
  );
};

export default Router;
