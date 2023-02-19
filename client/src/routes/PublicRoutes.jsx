import { Route, Routes } from "react-router-dom";
import Login from '../pages/Login'
const PublicRoutes = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
    <Routes>
      <Route path="/*" element={<Login />} />
    </Routes>
    </div>
  );
};

export { PublicRoutes };
