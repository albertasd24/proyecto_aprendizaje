import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from "../pages/Login";
import App from "../App";
import Login from "../pages/Login";


const AplicattionRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AplicattionRoutes };
