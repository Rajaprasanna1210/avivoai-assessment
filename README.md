# AVIVO.AI Assessment - Full Stack User Management App

This is a full-stack application built for the AVIVO.AI assessment. It consists of a React frontend and a Node.js backend with MySQL as the database. The app fetches and manages user data, allowing operations such as view, search, add, delete, and refresh.

---

## Folder Structure

project-root/
│
├── backend/
│ ├── db/
│ │ └── connection.js # Database connection and table setup
│ ├── routes/
│ │ └── userRoutes.js # Express route for /users
│ ├── controllers/
│ │ └── userController.js # Controller for user logic
│ ├── app.js # Express server setup
│ ├── package.json # Backend dependencies and scripts
│ └── .env.example # Sample environment config
│
└── frontend/
├── src/
│ ├── components/
│ │ ├── AddUserButton.jsx
│ │ └── UserTable.jsx
│ └── App.jsx
├── public/
├── package.json # Frontend dependencies and scripts
└── README.md


---

## Prerequisites

- Node.js v16+
- MySQL Server running locally
- npm (comes with Node.js)

---

## Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
Install dependencies:
npm install
Set up environment variables:
Rename .env.example to .env and configure if needed.

Start the backend server:
node app.js
The server will:

Create userdb database if not exists
Create a users table
Insert 2 sample users (ignoring duplicates based on firstName)
Run at http://localhost:3000

API endpoint exposed by backend:
GET /users/get_all_users

Frontend Setup

Navigate to the frontend directory:
cd frontend
Install dependencies:
npm install
Start the frontend server:
npm run dev
The frontend will run at http://localhost:5173 (Vite default).

NPM Packages Used

Backend
express – Web framework
mysql2 – MySQL client for Node.js
cors – Enable cross-origin resource sharing
dotenv – Load environment variables from .env
Frontend
react – JavaScript library for building UI
react-dom – React DOM bindings
@chakra-ui/react – UI components library
@emotion/react & styled-components – Styling support
axios – HTTP requests
vite – Frontend build tool