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
import Expense from "./pages/Expense";
import Trainer from "./pages/Trainer";
import Attendance from "./pages/Attendance";
import StudentFee from "./pages/StudentFee";
import AttendanceStudent from "./pages/AttendanceStudent";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Student />} /> 
        <Route path="/student-fee" element={<StudentFee />} /> 
        <Route path="/attendance" element={<Attendance />} /> 
        <Route path="/attendance-student" element={<AttendanceStudent />} /> 
        <Route path="/expense" element={<Expense />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="notfound" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
