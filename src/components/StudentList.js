import React from "react";
import { students } from '../data/students';
import '../style/StudentList.css';

export function StudentList({ studentList }) {

    return (

        <div>
            <ul className="student-list">
                {studentList.map((student) => (
                    <li key={student.id} className="student-item">
                        <img
                            src={`/assets/images/${student.id}.jpg`} // Dynamic image path
                            alt={student.name}
                            className="student-image"
                        />
                        <div className="student-details">
                            <h2>{student.name}</h2>
                            <p>Email: {student.email}</p>
                            <p>Major: {student.major}</p>
                            <p>Score: {student.score}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}