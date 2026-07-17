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

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setCourse({
            ...course,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(course);

        alert("Course Saved Successfully");
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
                            Save Course
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );
}

export default AddCourse;