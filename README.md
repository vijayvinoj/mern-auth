# MERN Auth System

A full-stack authentication system built with the MERN stack using JWT for stateless authentication.

## Features

- User Registration
- User Login
- User Logout
- Protected Routes
- JWT Authentication
- Password Hashing with bcrypt
- Persistent Login

## Tech Stack

**Frontend:** React, React Router DOM, Axios, Context API

**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs

## Project Structure

    mern-auth/
    ├── server/
    │   ├── index.js
    │   ├── models/
    │   │   └── User.js
    │   ├── controllers/
    │   │   └── authController.js
    │   ├── routes/
    │   │   └── authRoutes.js
    │   └── middleware/
    │       └── protect.js
    └── client/
        └── src/
            ├── api/
            │   └── auth.js
            ├── context/
            │   └── AuthContext.jsx
            ├── pages/
            │   ├── Register.jsx
            │   ├── Login.jsx
            │   └── Dashboard.jsx
            └── components/
                └── PrivateRoute.jsx

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running locally

### Installation

1. Clone the repo

        git clone https://github.com/vijayvinoj/mern-auth.git
        cd mern-auth

2. Install backend dependencies

        cd server
        npm install

3. Install frontend dependencies

        cd ../client
        npm install

4. Create `.env` file inside `server/`

        MONGO_URI=mongodb://127.0.0.1:27017/mern-auth
        JWT_SECRET=yourLongRandomSecretKey
        PORT=5000

### Running the App

Terminal 1 — Backend

        cd server
        npm run dev

Terminal 2 — Frontend

        cd client
        npm start

Open browser at `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | /api/auth/register | Register new user | No |
| POST | /api/auth/login | Login user | No |
| GET | /api/auth/me | Get current user | Yes |

## Environment Variables

| Variable | Description |
|----------|-------------|
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | Secret key for signing JWT tokens |
| PORT | Port for the backend server |

## Author

Vijay
