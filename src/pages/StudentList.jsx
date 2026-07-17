import React from "react";
import "./StudentList.css";
import Photo from "../assets/Photo.jpg";
import { FaEdit, FaTrash } from "react-icons/fa";

function StudentList() {

  const students = [
    {
      id: "STU001",
      name: "Kirti Chaudhari",
      course: "MERN Stack",
      batch: "Morning",
      mobile: "9876543210",
    },
    {
      id: "STU002",
      name: "Rahul Patil",
      course: "Java Full Stack",
      batch: "Evening",
      mobile: "9876543211",
    },
  ];

  return (
    <div className="student-list-container">

      <div className="student-list-card">

        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">

          <h2 className="page-title">
            Student List
          </h2>

          <button className="btn btn-primary">
            + Add Student
          </button>

        </div>

        <div className="row mb-3">

          <div className="col-lg-4 col-md-6 col-12">

            <input
              type="text"
              className="form-control"
              placeholder="Search Student..."
            />

          </div>

        </div>

        <div className="table-responsive">

          <table className="table table-bordered table-hover align-middle">

            <thead className="table-primary">

              <tr>
                <th>Photo</th>
                <th>Student ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Mobile</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {
                students.map((student) => (

                  <tr key={student.id}>

                    <td>
                      <img
                        src={Photo}
                        alt="Student"
                        className="student-img"
                      />
                    </td>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.batch}</td>
                    <td>{student.mobile}</td>

                    <td>

                      <button className="btn btn-warning btn-sm me-2">

                        <FaEdit />

                      </button>

                      <button className="btn btn-danger btn-sm">

                        <FaTrash />

                      </button>

                    </td>

                  </tr>

                ))
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default StudentList;