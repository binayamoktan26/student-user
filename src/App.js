import "./App.css";
import StudentList from "./Componentes/StudentList";
import StudentTable from "./Componentes/StudentTable";
import { useState } from "react";
function App() {
  const [studentList, setStudentList] = useState([]);

  const addStudent = (studentObject) => {
    setStudentList([...studentList, studentObject]);
    console.log(studentList);
  };

  return (
    <div>
      <StudentList addStudent={addStudent} />
      <StudentTable studentList={studentList} />
    </div>
  );
}

export default App;
