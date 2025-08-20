import React from "react";
import { useState } from "react";

const StudentList = ({ addStudent }) => {
  const [student, setStudent] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
  };

  return (
    <div className="w-50 shadow-lg mt-5 m-auto rounded p-2">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row g-2">
          <div className="col-md-3">
            <select
              className="form-select"
              name="gender"
              onChange={handleOnChange}
              required
            >
              <option value="">Choose</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Full Name"
              aria-label="Last name"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add Student</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default StudentList;
