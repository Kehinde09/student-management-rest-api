const express = require("express");

const app = express();
const PORT = 900;

// Middleware
app.use(express.json());

// In-memory database
let students = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
    course: "Computer Science"
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 22,
    course: "Software Engineering"
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 21,
    course: "Data Science"
  },
  {
    id: 4,
    name: "Bob Brown",
    age: 23,
    course: "Web Development"
  }
];

// Home route
app.get("/", (req, res) => {
  res.send("Student Management API is running");
});

// 1. Add a new student
app.post("/addstudents", (req, res) => {
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({
      message: "Name, age, and course are required"
    });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    age,
    course
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

// 2. Get all students
app.get("/getallstudents", (req, res) => {
  res.status(200).json(students);
});

// 3. Get a student by ID
app.get("/getstudents/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find(
    (student) => student.id === id
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});

// 4. Update a student
app.put("/updatestudents/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find(
    (student) => student.id === id
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const { name, age, course } = req.body;

  if (name !== undefined) {
    student.name = name;
  }

  if (age !== undefined) {
    student.age = age;
  }

  if (course !== undefined) {
    student.course = course;
  }

  res.status(200).json({
    message: "Student updated successfully",
    student: student
  });
});

// 5. Delete a student
app.delete("/deletestudents/:id", (req, res) => {
  const id = Number(req.params.id);

  const studentIndex = students.findIndex(
    (student) => student.id === id
  );

  if (studentIndex === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const deletedStudent = students.splice(studentIndex, 1);

  res.status(200).json({
    message: "Student deleted successfully",
    student: deletedStudent[0]
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});