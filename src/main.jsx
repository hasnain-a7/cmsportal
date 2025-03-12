import "./index.css";
import { createBrowserRouter } from "react-router-dom";

import {
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Pages/Layout.jsx";
import Course from "./Pages/Course.jsx";
import Attandance from "./Pages/Attandance.jsx";
import GradeBook from "./Pages/GradeBook.jsx";

import Dashboard from "./Pages/Dashboard.jsx";
import ReactDOM from "react-dom/client";
import Assigment from "./Components/OtherComponents/Assigment.jsx";
import Marks from "./Components/OtherComponents/Marks.jsx";
import Exam from "./Components/OtherComponents/Exam.jsx";
import Lectures from "./Components/OtherComponents/Lectures.jsx";
import CardInfo from "./Components/OtherComponents/CardInfo.jsx";

import { AuthProvider } from "./AuthContext/auth.jsx";
import ProtectedLayout from "./Pages/ProtectedLayout.jsx";
import LoginPage from "./Pages/LoginPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<ProtectedLayout />}>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Course />} />
          <Route path="attandance" element={<Attandance />} />
          <Route path="gradebook" element={<GradeBook />} />
          <Route path="courses/assignment" element={<Assigment />} />
          <Route path="courses/marks" element={<Marks />} />
          <Route path="courses/exams" element={<Exam />} />
          <Route path="courses/lectures" element={<Lectures />} />
          <Route path="courses/course-info" element={<CardInfo />} />
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
