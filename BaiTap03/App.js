import React, { useState } from "react";
import { StudentList } from './components/StudentList';
import { students } from './data/students';
import './style/App.css';

function App() {
  const [filteredStudents, setFilteredStudents] = useState(students); // Initialize with all students
  const [major, setMajor] = useState('');
  const [studentId, setStudentId] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const filterByMajor = () => {
    const itStudents = students.filter(student => student.major === major);
    setFilteredStudents(itStudents);
  };

  const filterById = () => {
    const studentWithId = students.filter(student => student.id === Number(studentId));
    setFilteredStudents(studentWithId);
  };

  const sortByScore = () => {
    const sortedStudents = [...students].sort((a, b) => b.score - a.score); // Sort in descending order
    setFilteredStudents(sortedStudents);
  };

  return (
    <div>
      <h1>BaiTap03</h1>
      <h1>Sinh Vien Tieu Bieu</h1>

      <div>
        <button onClick={filterByMajor}>Filter by Major</button>
        <input
          type="text"
          placeholder="Enter Major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
      </div>

      <div>
        <button onClick={filterById}>Filter by ID</button>
        <input
          type="number"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
      </div>

      <div>
        <button onClick={sortByScore}>Sort by Score</button>
      </div>

      <StudentList studentList={filteredStudents} />
    </div>
  );
}

export default App;