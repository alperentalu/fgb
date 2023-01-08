import { Route, Routes } from "react-router-dom";
import Counter from "../pages/Counter";
import HomePage from "../pages/HomePage"
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/*" element={<Counter />} />
    </Routes>
  );
};

export { PublicRoutes };