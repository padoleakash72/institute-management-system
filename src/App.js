import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import StudentRegistration from "./pages/StudentRegistration";
import StudentList from "./pages/StudentList";
import StudentAttendance from "./pages/StudentAttendance";

import AddCourse from "./pages/AddCourse";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/student-registration"
          element={<StudentRegistration />}
        />

        <Route
          path="/student-list"
          element={<StudentList />}
        />

        <Route
          path="/student-attendance"
          element={<StudentAttendance />}
        />

        <Route
          path="/add-course"
          element={<AddCourse />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;