import { Routes, Route } from "react-router-dom";
import Career from "../pages/Career/Career";
import Coope from "../pages/Coope/Coope";
import DesignCenter from "../pages/DesignCenter/DesignCenter";
import Home from "../pages/Home/Home";
import Production from "../pages/Productuion/Production";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cooperation" element={<Coope />} />
      <Route path="/design-center" element={<DesignCenter />} />
      <Route path="/production" element={<Production />} />
      <Route path="/career" element={<Career />} />
    </Routes>
  );
};

export default MainRoutes;
