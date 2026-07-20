import React, { useState } from "react";
import "./AddCourse.css";

function AddCourse() {

    const [course, setCourse] = useState({
        courseName: "",
        duration: "",
        fees: "",
        description: "",
        status: true,
    });
    const [courseList, setCourseList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setCourse({
            ...course,
            [name]: type === "checkbox" ? checked : value,
        });

        setErrors({
            ...errors,
            [name]: "",
        });

    };

    const handleEdit = (index) => {

        setCourse(courseList[index]);

        setEditIndex(index);

    };

    const handleDelete = (index) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this course?"
        );

        if (!confirmDelete) {
            return;
        }

        const updatedCourses = [...courseList];

        updatedCourses.splice(index, 1);

        setCourseList(updatedCourses);

        alert("Course Deleted Successfully");

    };

    const validate = () => {

        let newErrors = {};

        if (!course.courseName.trim()) {
            newErrors.courseName = "Course Name is required";
        }

        if (!course.duration) {
            newErrors.duration = "Please Select Duration";
        }

        if (!course.fees.trim()) {
            newErrors.fees = "Fees is required";
        } else if (Number(course.fees) <= 0) {
            newErrors.fees = "Fees must be greater than 0";
        }

        if (!course.description.trim()) {
            newErrors.description = "Description is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!validate()) {
            return;
        }

        if (editIndex !== null) {

            const updatedCourses = [...courseList];

            updatedCourses[editIndex] = {
                ...course,
                id: updatedCourses[editIndex].id,
            };

            setCourseList(updatedCourses);

            alert("Course Updated Successfully");

            setEditIndex(null);

        } else {

            const newCourse = {
                id: Date.now(),
                ...course,
            };

            setCourseList([...courseList, newCourse]);

            alert("Course Saved Successfully");

        }

        setCourse({
            courseName: "",
            duration: "",
            fees: "",
            description: "",
            status: true,
        });


    };
    return (

        <div className="registration-container">

            <div className="registration-card">

                <h2 className="page-title">
                    Add Course
                </h2>

                <hr />

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        {/* Course Name */}

                        <div className="col-lg-6 col-md-6 col-12 mb-3">

                            <label className="form-label">
                                Course Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="courseName"
                                value={course.courseName}
                                onChange={handleChange}
                                placeholder="Enter Course Name"
                            />
                            {
                                errors.courseName &&
                                <small className="text-danger">
                                    {errors.courseName}
                                </small>
                            }

                        </div>

                        {/* Duration */}

                        <div className="col-lg-6 col-md-6 col-12 mb-3">

                            <label className="form-label">
                                Duration
                            </label>

                            <select
                                className="form-select"
                                name="duration"
                                value={course.duration}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select Duration
                                </option>

                                <option value="15 Days">
                                    15 Days
                                </option>

                                <option value="1 Month">
                                    1 Month
                                </option>

                                <option value="2 Months">
                                    2 Months
                                </option>

                                <option value="3 Months">
                                    3 Months
                                </option>

                                <option value="6 Months">
                                    6 Months
                                </option>

                                <option value="9 Months">
                                    9 Months
                                </option>
                                <option value="1 Year">
                                    1 Year
                                </option>

                            </select>
                            {
                                errors.duration &&
                                <small className="text-danger">
                                    {errors.duration}
                                </small>
                            }
                        </div>
                        {/* Fees */}

                        <div className="col-lg-6 col-md-6 col-12 mb-3">

                            <label className="form-label">
                                Fees
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                name="fees"
                                value={course.fees}
                                onChange={handleChange}
                                placeholder="Enter Course Fees"
                            />
                            {
                                errors.fees &&
                                <small className="text-danger">
                                    {errors.fees}
                                </small>
                            }
                        </div>

                        {/* Status */}

                        <div className="col-lg-6 col-md-6 col-12 mb-3">

                            <label className="form-label d-block">
                                Status
                            </label>

                            <div className="form-check form-switch mt-2">

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="status"
                                    checked={course.status}
                                    onChange={handleChange}
                                />

                                <label className="form-check-label">

                                    {
                                        course.status
                                            ? "Active"
                                            : "Inactive"
                                    }

                                </label>

                            </div>

                        </div>

                        {/* Description */}

                        <div className="col-12 mb-3">

                            <label className="form-label">
                                Description
                            </label>

                            <textarea
                                className="form-control"
                                rows="4"
                                name="description"
                                value={course.description}
                                onChange={handleChange}
                                placeholder="Enter Course Description"
                            ></textarea>

                        </div>

                    </div>

                    <div className="text-end mt-4">

                        <button
                            type="submit"
                            className="btn btn-primary px-4"
                        >
                            {
                                editIndex !== null
                                    ? "Update Course"
                                    : "Save Course"
                            }
                        </button>
                    </div>

                </form>

                <hr className="my-4" />

                <h3 className="page-title">
                    Course List
                </h3>

                <div className="table-responsive">

                    <table className="table table-bordered table-hover align-middle">

                        <thead className="table-primary">

                            <tr>

                                <th>Course ID</th>
                                <th>Course Name</th>
                                <th>Duration</th>
                                <th>Fees</th>
                                <th>Status</th>
                                <th>Description</th>
                                <th>Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                courseList.length > 0 ?

                                    courseList.map((item, index) => (

                                        <tr key={item.id}>

                                            <td>{index + 1}</td>

                                            <td>{item.courseName}</td>

                                            <td>{item.duration}</td>

                                            <td>₹ {item.fees}</td>

                                            <td>

                                                {
                                                    item.status ?

                                                        <span className="badge bg-success">
                                                            Active
                                                        </span>

                                                        :

                                                        <span className="badge bg-danger">
                                                            Inactive
                                                        </span>

                                                }

                                            </td>

                                            <td>{item.description}</td>

                                            <td>

                                                <button
                                                    className="btn btn-sm btn-warning me-2"
                                                    onClick={() => handleEdit(index)}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDelete(index)}
                                                >
                                                    Delete
                                                </button>
                                            </td>

                                        </tr>

                                    ))

                                    :

                                    <tr>

                                        <td colSpan="7" className="text-center">

                                            No Courses Found

                                        </td>

                                    </tr>

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );
}

export default AddCourse;