import React from "react";

const StudentTable = ({ studentList }) => {
  return (
    <div className="m-auto">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>

            <th scope="col">Gender</th>
            <th scope="col">Full Name</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((item, i) => {
            return (
              <tr>
                <th scope="row">{i + 0}</th>

                <td>{item.gender}</td>
                <td style={{ color: item.gender === "m" ? "blue" : "pink" }}>
                  {item.name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
