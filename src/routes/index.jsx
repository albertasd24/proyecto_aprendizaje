import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from "../pages/Login";
import App from "../App";
import Login from "../pages/Login/Login";
import DashboardLayout from "../pages/Layouts/DashboardLayout/DashboardLayout";
import FormTemplate from "../components/FormTemplate/FormTemplate";
import Template from "../Template/Template";
import DragDrop from "../DragDrop/DragDrop";


const AplicattionRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/d" element={<DashboardLayout />} />
        <Route path="/template" element={<FormTemplate />} />
        <Route path="/plantilla" element={<DragDrop />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AplicattionRoutes };
