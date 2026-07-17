import "./StudentRegistration.css";
import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";

function StudentRegistration() {

    const [photo, setPhoto] = useState(null);

    const [student, setStudent] = useState({

        studentId: "STU001",

        admissionDate: "",

        rollNumber: "",

        firstName: "",

        middleName: "",

        lastName: "",

        gender: "",

        dob: "",

        bloodGroup: "",

        mobile: "",

        email: "",

        aadhaar: "",

        address: "",
        city: "",
        district: "",
        state: "",
        pincode: "",

        course: "",
        batch: "",

        fatherName: "",
        motherName: "",
        parentMobile: "",

    });

    const [students, setStudents] = useState([]);
    const [errors, setErrors] = useState({});

    const handlePhotoChange = (e) => {
        if (e.target.files[0]) {
            setPhoto(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        setStudent({

            ...student, 

            [name]: value

        });

        setErrors({

            ...errors,

            [name]: ""

        });

    };

    const validate = () => {

        let newErrors = {};

        if (!student.admissionDate) {
            newErrors.admissionDate = "Admission Date is required";
        }

        if (!student.rollNumber.trim()) {
            newErrors.rollNumber = "Roll Number is required";
        }

        if (!student.firstName.trim()) {
            newErrors.firstName = "First Name is required";
        }
        if (!student.middleName.trim()) {
            newErrors.middleName = "Middle Name is required";
        }
        if (!student.lastName.trim()) {
            newErrors.lastName = "Last Name is required";
        }
        if (!student.mobile.trim()) {
            newErrors.mobile = "Mobile Number is required";
        } else if (!/^[0-9]{10}$/.test(student.mobile)) {
            newErrors.mobile = "Enter valid mobile number";
        }

        if (!student.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(student.email)) {
            newErrors.email = "Enter valid email";
        }

        if (!student.gender) {
            newErrors.gender = "Please select gender";
        }

        if (!student.dob) {
            newErrors.dob = "Date of Birth is required";
        }

        if (!student.aadhaar.trim()) {

            newErrors.aadhaar = "Aadhaar Number is required";

        }
        else if (!/^[0-9]{12}$/.test(student.aadhaar)) {

            newErrors.aadhaar = "Aadhaar must be 12 digits";

        }

        if (!student.pincode.trim()) {

            newErrors.pincode = "Pincode is required";

        }
        else if (!/^[0-9]{6}$/.test(student.pincode)) {

            newErrors.pincode = "Pincode must be 6 digits";

        }

        if (!student.course.trim()) {
            newErrors.course = "Please Select Course";
        }

        if (!student.parentMobile.trim()) {

            newErrors.parentMobile = "Parent Mobile Number is required";

        }
        else if (!/^[0-9]{10}$/.test(student.parentMobile)) {

            newErrors.parentMobile = "Enter valid mobile number";

        }

        if (!student.batch.trim()) {
            newErrors.batch = "Batch Name is required";
        }
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!validate()) {
            return;
        }

        const newStudent = {
            ...student,
            id: Date.now(),
        };

        setStudents([...students, newStudent]);

        console.log(newStudent);

        alert("Student Registered Successfully");
    };
    return (


        <div className="registration-container">

            <form onSubmit={handleSubmit}>

                <div className="registration-card">

                    <h2 className="page-title">
                        Student Registration
                    </h2>

                    <hr />

                    <div className="row">

                        {/* Photo */}

                        <div className="col-lg-3 col-md-4 col-12 text-center mb-4">

                            <div className="photo-card">
                                <h4 className="section-title">
                                    Student Photo
                                </h4>

                                {
                                    photo ?

                                        <img
                                            src={photo}
                                            alt="Student"
                                            className="student-photo"
                                        />

                                        :

                                        <div className="photo-placeholder">
                                            <FaUserGraduate size={70} />
                                        </div>

                                }

                                <input
                                    type="file"
                                    className="form-control mt-3"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                />

                            </div>

                        </div>

                        {/* Personal Details */}

                        <div className="col-lg-9 col-md-8 col-12">

                            <h4 className="section-title">
                                Personal Details
                            </h4>

                            <div className="row">

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">
                                        Student ID
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value="STU001"
                                        readOnly
                                    />

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">
                                        Admission Date
                                    </label>

                                    <input
                                        type="text"
                                        name="admissionDate"
                                        className="form-control"
                                        placeholder="Enter Admission Date"
                                        value={student.admissionDate}
                                        onChange={handleChange}
                                    />

                                    {
                                        errors.admissionDate &&
                                        <small className="text-danger">
                                            {errors.admissionDate}
                                        </small>
                                    }

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">
                                        Roll Number
                                    </label>

                                    <input
                                        type="text"
                                        name="rollNumber"
                                        className="form-control"
                                        placeholder="Enter Roll Number"
                                        value={student.rollNumber}
                                        onChange={handleChange}
                                    />

                                    {
                                        errors.rollNumber &&
                                        <small className="text-danger">
                                            {errors.rollNumber}
                                        </small>
                                    }
                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-control"
                                        placeholder="Enter First Name"
                                        value={student.firstName}
                                        onChange={handleChange}
                                    />
                                    {
                                        errors.firstName && (
                                            <small className="text-danger">
                                                {errors.firstName}
                                            </small>
                                        )
                                    }
                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">
                                        Middle Name
                                    </label>

                                    <input
                                        type="text"
                                        name="middleName"
                                        className="form-control"
                                        placeholder="Enter Middle Name"
                                        value={student.middleName}
                                        onChange={handleChange}
                                    />
                                    {
                                        errors.middleName && (
                                            <small className="text-danger">
                                                {errors.middleName}
                                            </small>
                                        )
                                    }
                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Enter Last Name"
                                        value={student.lastName}
                                        onChange={handleChange}
                                    />
                                    {
                                        errors.lastName && (
                                            <small className="text-danger">
                                                {errors.lastName}
                                            </small>
                                        )
                                    }
                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">
                                        Gender <span className="text-danger">*</span>
                                    </label>

                                    <select
                                        className="form-select"
                                        name="gender"
                                        value={student.gender}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select Gender
                                        </option>

                                        <option value="Male">
                                            Male
                                        </option>

                                        <option value="Female">
                                            Female
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>

                                    </select>

                                    {
                                        errors.gender &&
                                        <small className="text-danger">
                                            {errors.gender}
                                        </small>
                                    }

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">
                                        Date of Birth <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="date"
                                        name="dob"
                                        className="form-control"
                                        value={student.dob}
                                        onChange={handleChange}
                                    />

                                    {
                                        errors.dob &&
                                        <small className="text-danger">
                                            {errors.dob}
                                        </small>
                                    }

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">
                                        Blood Group
                                    </label>

                                    <select className="form-select">

                                        <option>Select Blood Group</option>

                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                        <option>O+</option>
                                        <option>O-</option>

                                    </select>

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">
                                        Mobile Number <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter Mobile Number"
                                        maxLength="10"
                                        name="mobile"
                                        value={student.mobile}
                                        onChange={handleChange}
                                    />
                                    {
                                        errors.mobile && (
                                            <small className="text-danger">
                                                {errors.mobile}
                                            </small>
                                        )
                                    }
                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Email Address"
                                        name="email"
                                        value={student.email}
                                        onChange={handleChange}
                                    />
                                    {
                                        errors.email && (
                                            <small className="text-danger">
                                                {errors.email}
                                            </small>
                                        )
                                    }
                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">
                                        Aadhaar Number
                                    </label>

                                    <input
                                        type="text"
                                        name="aadhaar"
                                        className="form-control"
                                        placeholder="Enter Aadhaar Number"
                                        value={student.aadhaar}
                                        onChange={handleChange}
                                        maxLength="12"
                                    />

                                    {
                                        errors.aadhaar &&
                                        <small className="text-danger">
                                            {errors.aadhaar}
                                        </small>
                                    }
                                </div>

                            </div>

                        </div>

                    </div>

                    <hr className="my-4" />

                    <h4 className="section-title">
                        Address Details
                    </h4>

                    <div className="row">

                        <div className="col-lg-3 col-md-6 col-12 mb-3">

                            <label className="form-label">
                                Address
                            </label>

                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Enter Full Address"
                            ></textarea>

                        </div>

                        <div className="col-md-3 mb-3">

                            <label className="form-label">
                                City
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter City"
                            />

                        </div>

                        <div className="col-md-3 mb-3">

                            <label className="form-label">
                                Taluka
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Taluka"
                            />

                        </div>

                        <div className="col-md-3 mb-3">

                            <label className="form-label">
                                District
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter District"
                            />

                        </div>

                        <div className="col-md-3 mb-3">

                            <label className="form-label">
                                State
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter State"
                            />

                        </div>

                        <div className="col-md-3 mb-3">

                            <label className="form-label">
                                Country
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Country"
                            />

                        </div>

                        <div className="col-md-3 mb-3">

                            <label className="form-label">
                                PIN Code
                            </label>

                            <input
                                type="text"
                                name="pincode"
                                className="form-control"
                                placeholder="Enter Pincode"
                                value={student.pincode}
                                onChange={handleChange}
                                maxLength="6"
                            />

                            {
                                errors.pincode &&
                                <small className="text-danger">
                                    {errors.pincode}
                                </small>
                            }

                        </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="section-title">
                        Course Details
                    </h4>

                    <div className="row">

                        <div className="col-lg-4 col-md-6 col-12 mb-3">

                            <label className="form-label">
                                Course Name <span className="text-danger">*</span>
                            </label>

                            <select
                                className="form-select"
                                name="course"
                                value={student.course}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select Course
                                </option>

                                <option value="Java Full Stack">Java Full Stack</option>
                                <option value="MERN Stack">MERN Stack</option>
                                <option value="Python Full Stack">Python Full Stack</option>
                                <option value="Data Science">Data Science</option>
                                <option value="UI / UX Design">UI / UX Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Tally with GST">Tally with GST</option>
                                <option value="MS-CIT">MS-CIT</option>
                                <option value="Graphic Design">Graphic Design</option>

                            </select>

                            {
                                errors.course &&
                                <small className="text-danger">
                                    {errors.course}
                                </small>
                            }

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Batch Name
                            </label>

                            <select
                                className="form-select"
                                name="batch"
                                value={student.batch}
                                onChange={handleChange}
                            >
                                <option value="">Select Batch</option>
                                <option>Morning</option>
                                <option>Afternoon</option>
                                <option>Evening</option>
                            </select>

                            {
                                errors.batch &&
                                <small className="text-danger">
                                    {errors.batch}
                                </small>
                            }

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Faculty
                            </label>

                            <select
                                className="form-select"
                                name="faculty"
                                value={student.faculty}
                                onChange={handleChange}
                            >
                                <option value="">Select Faculty</option>
                                <option>John Doe</option>
                                <option>Jane Smith</option>
                                <option>Bob Johnson</option>
                            </select>

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Course Duration
                            </label>

                            <select className="form-select">

                                <option value="">
                                    Select Duration
                                </option>

                                <option>1 Month</option>
                                <option>2 Months</option>
                                <option>3 Months</option>
                                <option>6 Months</option>
                                <option>12 Months</option>

                            </select>

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Start Date
                            </label>

                            <input
                                type="date"
                                className="form-control"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                End Date
                            </label>

                            <input
                                type="date"
                                className="form-control"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Batch Timing
                            </label>

                            <select className="form-select">

                                <option value="">
                                    Select Timing
                                </option>

                                <option>07:00 AM - 09:00 AM</option>
                                <option>09:00 AM - 11:00 AM</option>
                                <option>11:00 AM - 01:00 PM</option>
                                <option>02:00 PM - 04:00 PM</option>
                                <option>04:00 PM - 06:00 PM</option>
                                <option>06:00 PM - 08:00 PM</option>

                            </select>

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Learning Mode
                            </label>

                            <select className="form-select">

                                <option value="">
                                    Select Mode
                                </option>

                                <option>Offline</option>
                                <option>Online</option>
                                <option>Hybrid</option>

                            </select>

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Course Status
                            </label>

                            <select className="form-select">

                                <option value="">
                                    Select Status
                                </option>

                                <option>Active</option>
                                <option>Upcoming</option>
                                <option>Completed</option>

                            </select>

                        </div>

                    </div>

                    <hr className="my-4" />

                    <h4 className="section-title">
                        Parent / Guardian Details
                    </h4>

                    <div className="row">

                        <div className="col-lg-4 col-md-6 col-12 mb-3">

                            <label className="form-label">
                                Father's Name <span className="text-danger">*</span>
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Father's Name"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Mother's Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Mother's Name"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Guardian Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Guardian Name"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Parent Mobile Number <span className="text-danger">*</span>
                            </label>

                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter Parent Mobile Number"
                                maxLength="10"
                                name="parentMobile"
                                value={student.parentMobile}
                                onChange={handleChange}
                            />
                            {
                                errors.parentMobile && (
                                    <small className="text-danger">
                                        {errors.parentMobile}
                                    </small>
                                )
                            }

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Alternate Mobile Number
                            </label>

                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter Alternate Mobile Number"
                                maxLength="10"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Parent Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Parent Email"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Occupation
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Occupation"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Annual Income
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Annual Income"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Relationship
                            </label>

                            <select className="form-select">

                                <option value="">
                                    Select Relationship
                                </option>

                                <option>Father</option>
                                <option>Mother</option>
                                <option>Brother</option>
                                <option>Sister</option>
                                <option>Guardian</option>
                                <option>Other</option>

                            </select>

                        </div>

                    </div>

                    <hr className="my-4" />

                    <h4 className="section-title">
                        Fee Details
                    </h4>

                    <div className="row">

                        <div className="col-lg-4 col-md-6 col-12 mb-3">

                            <label className="form-label">
                                Total Course Fees <span className="text-danger">*</span>
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Total Fees"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Discount
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Discount Amount"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Final Fees
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                placeholder="Final Fees"
                                readOnly
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Paid Amount
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Paid Amount"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Pending Amount
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                placeholder="Pending Amount"
                                readOnly
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Payment Mode
                            </label>

                            <select className="form-select">

                                <option value="">
                                    Select Payment Mode
                                </option>

                                <option>Cash</option>
                                <option>UPI</option>
                                <option>Credit Card</option>
                                <option>Debit Card</option>
                                <option>Net Banking</option>
                                <option>Cheque</option>

                            </select>

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Payment Status
                            </label>

                            <select className="form-select">

                                <option value="">
                                    Select Status
                                </option>

                                <option>Paid</option>
                                <option>Partial Paid</option>
                                <option>Pending</option>

                            </select>

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Payment Date
                            </label>

                            <input
                                type="date"
                                className="form-control"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Receipt Number
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Auto / Manual Receipt No."
                            />

                        </div>

                    </div>

                    <hr className="my-4" />

                    <h4 className="section-title">
                        Documents Details
                    </h4>

                    <div className="row">

                        <div className="col-lg-4 col-md-6 col-12 mb-3">

                            <label className="form-label">
                                Aadhaar Card
                            </label>

                            <input
                                type="file"
                                className="form-control"
                                accept=".pdf,.jpg,.jpeg,.png"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Previous Qualification Certificate
                            </label>

                            <input
                                type="file"
                                className="form-control"
                                accept=".pdf,.jpg,.jpeg,.png"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Student Signature
                            </label>

                            <input
                                type="file"
                                className="form-control"
                                accept=".jpg,.jpeg,.png"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Parent Signature
                            </label>

                            <input
                                type="file"
                                className="form-control"
                                accept=".jpg,.jpeg,.png"
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Other Documents
                            </label>

                            <input
                                type="file"
                                className="form-control"
                                multiple
                            />

                        </div>

                    </div>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-end flex-wrap gap-2 mt-4">

                        <button
                            type="reset"
                            className="btn btn-secondary px-4"
                        >
                            Reset
                        </button>

                        <button
                            type="button"
                            className="btn btn-danger px-4"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="btn btn-primary px-4"
                        >
                            Save Student
                        </button>

                    </div>
                </div>

            </form>

        </div>

    );
}

export default StudentRegistration;