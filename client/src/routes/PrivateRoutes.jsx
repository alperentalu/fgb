import { Route, Routes } from "react-router-dom";
import Counter from "../pages/Counter";
import HomePage from "../pages/HomePage"
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};

export { PrivateRoutes };
