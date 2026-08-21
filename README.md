# Student Management REST API

A simple REST API built with **Node.js and Express.js** for managing student records. The application uses an **in-memory JavaScript array** to store student data instead of a real database.

## Assignment Objective

The purpose of this project is to demonstrate how to build a basic REST API that can perform **CRUD operations** on student records.

CRUD means:

* **Create** — Add a new student
* **Read** — Retrieve student information
* **Update** — Modify student information
* **Delete** — Remove a student

## Features

* Add a new student
* Get all students
* Get a student by ID
* Update student information
* Delete a student
* Store student data using an in-memory JavaScript array

## Technologies Used

* **Node.js**
* **Express.js**
* **JavaScript**
* **Postman** — for testing the API

## Project Structure

```text
student-management-rest-api/
│
├── node_modules/
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Kehinde09/student-management-rest-api.git
```

### 2. Navigate to the project folder

```bash
cd student-management-rest-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

The server will run at:

```text
http://localhost:3000
```

## API Endpoints

| Method   | Endpoint        | Description                |
| -------- | --------------- | -------------------------- |
| `POST`   | `/students`     | Add a new student          |
| `GET`    | `/students`     | Get all students           |
| `GET`    | `/students/:id` | Get a student by ID        |
| `PUT`    | `/students/:id` | Update student information |
| `DELETE` | `/students/:id` | Delete a student           |

## Example Student

A student record can contain information such as:

```json
{
  "id": 1,
  "name": "Odukoya Kehinde",
  "age": 21,
  "course": "Computer Science"
}
```

## Data Storage

This project uses a **JavaScript array as an in-memory database**.

Student records are stored temporarily while the Node.js server is running. No external database such as MongoDB or MySQL is used.

Because the data is stored only in memory, any students added, updated, or deleted will be lost when the server is stopped or restarted.

## Testing

The API endpoints can be tested using **Postman** by sending requests to:

```text
http://localhost:3000/students
```

The different HTTP methods (`POST`, `GET`, `PUT`, and `DELETE`) can be used to verify each CRUD operation.

## Conclusion

This project demonstrates the basic implementation of a **Node.js REST API** using Express.js and an in-memory JavaScript array. It provides all the required operations for creating, retrieving, updating, and deleting student records.