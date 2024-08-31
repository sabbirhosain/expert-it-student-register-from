import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Student from "./pages/Student";
import Setting from "./pages/Setting";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/student" element={<Student />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="notfound" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
