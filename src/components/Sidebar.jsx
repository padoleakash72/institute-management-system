import {
    MdDashboard,
    MdPeople,
    MdSchool,
    MdExpandMore,
    MdExpandLess,
    MdMenuBook,
    MdPayments,
    MdAssessment,
    MdSettings,
    MdLogout,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
    const navigate = useNavigate();
    const [studentOpen, setStudentOpen] = useState(false);
    const [courseOpen, setCourseOpen] = useState(false);

    return (
        <div className="sidebar">

            <div className="logo-section">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
                    alt="logo"
                    className="logo"
                />

                <h4>Institute ERP</h4>
            </div>

            <ul className="menu">

                <li>
                    <MdDashboard className="icon" />
                    Dashboard
                </li>

                <li
                    onClick={() => setStudentOpen(!studentOpen)}
                    style={{ cursor: "pointer" }}
                >
                    <MdPeople className="icon" />
                    <span style={{ flex: 1 }}>Students</span>

                    {
                        studentOpen
                            ? <MdExpandLess />
                            : <MdExpandMore />
                    }
                </li>
                {
                    studentOpen && (
                        <ul className="submenu">

                            <li
                                onClick={() => navigate("/student-registration")}
                            >
                                Student Registration
                            </li>

                            <li
                                onClick={() => navigate("/student-list")}
                            >
                                Student List
                            </li>

                            <li
                                onClick={() => navigate("/student-attendance")}
                            >
                                Student Attendance
                            </li>

                        </ul>
                    )
                }
                <li>
                    <MdSchool className="icon" />
                    Teachers
                </li>

                <li
                    onClick={() => setCourseOpen(!courseOpen)}
                    style={{ cursor: "pointer" }}
                >
                    <MdMenuBook className="icon" />

                    <span style={{ flex: 1 }}>
                        Courses
                    </span>

                    {
                        courseOpen
                            ? <MdExpandLess />
                            : <MdExpandMore />
                    }

                </li>

                {
                    courseOpen && (

                        <ul className="submenu">

                            <li
                                onClick={() => navigate("/add-course")}
                            >
                                Add Course
                            </li>

                        </ul>

                    )
                }

                <li>
                    <MdPayments className="icon" />
                    Fees
                </li>

                <li>
                    <MdAssessment className="icon" />
                    Reports
                </li>

                <li>
                    <MdSettings className="icon" />
                    Settings
                </li>

                <li
                    className="logout"
                    onClick={() => navigate("/")}
                >
                    <MdLogout className="icon" />
                    Logout
                </li>

            </ul>

        </div>
    );
}

export default Sidebar;