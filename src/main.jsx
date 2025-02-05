import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Pages/Layout.jsx";
import Course from "./Pages/Course.jsx";
import Attandance from "./Pages/Attandance.jsx";
import GradeBook from "./Pages/GradeBook.jsx";

import Dashboard from "./Pages/Dashboard.jsx";
import Login from "./Pages/Login.jsx";
import Assigment from "./Components/OtherComponents/Assigment.jsx";
import Marks from "./Components/OtherComponents/Marks.jsx";
import Exam from "./Components/OtherComponents/Exam.jsx";
import Lectures from "./Components/OtherComponents/Lectures.jsx";
import CardInfo from "./Components/OtherComponents/CardInfo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="/courses" element={<Course />} />
      <Route path="attandance" element={<Attandance />} />
      <Route path="login" element={<Login />} />
      <Route path="gradebook" element={<GradeBook />} />
      <Route path="courses/assignment" element={<Assigment />} />
      <Route path="courses/marks" element={<Marks />} />
      <Route path="courses/exams" element={<Exam />} />
      <Route path="courses/lectures" element={<Lectures />} />
      <Route path="courses/course-info" element={<CardInfo />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
