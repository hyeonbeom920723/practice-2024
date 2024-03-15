import React from "react";

const students = [
  {
    id: 1,
    name: "HB",
  },
  {
    id: 2,
    name: "YB",
  },
  {
    id: 3,
    name: "Jake",
  },
  {
    id: 4,
    name: "Emily",
  },
  {
    id: 5,
    name: "Bob",
  },
];

const AttendanceBook = () => {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
};

export default AttendanceBook;
