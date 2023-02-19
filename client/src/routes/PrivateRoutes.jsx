import { Route, Routes } from "react-router-dom";
import Counter from "../pages/Counter";
import HomePage from "../pages/HomePage";
import Client from "../pages/Client"
import Sidebar from "../layouts/Sidebar";
const PrivateRoutes = () => {
  return (
    <div className="d-flex flex-row">
      <div className="align-self-start">
        <Sidebar />
      </div>
      <div className="">
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/client" element={<Client/>} />
          {/* <Route path="/counter" element={<Counter />} /> */}
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </div>
     </div>
  );
};

export { PrivateRoutes };
