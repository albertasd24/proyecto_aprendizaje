import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from "../pages/Login";
import App from "../App";
import Login from "../pages/Login";
import Template from "../Template/Template";
import DragDrop from "../DragDrop/DragDrop";


const AplicattionRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plantilla" element={<DragDrop />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AplicattionRoutes };
