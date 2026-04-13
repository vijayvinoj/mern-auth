# MERN Auth System

A full-stack authentication system built with the MERN stack (MongoDB, Express, React, Node.js) using JWT for stateless authentication.

## Features

- User Registration
- User Login
- User Logout
- Protected Routes
- JWT Authentication
- Password Hashing with bcrypt
- Persistent Login (token stored in localStorage)

## Tech Stack

**Frontend**
- React
- React Router DOM
- Axios
- Context API

**Backend**
- Node.js
- Express.js
- MongoDB (local)
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running locally

### Installation

1. Clone the repo
```bash
git clone https://github.com/vijayvinoj/mern-auth.git
cd mern-auth
```

2. Install backend dependencies
```bash
cd server
npm install
```

3. Install frontend dependencies
```bash
cd ../client
npm install
```

4. Create `.env` file inside `server/`

### Running the App

**Terminal 1 — Backend**
```bash
cd server
npm run dev
```

**Terminal 2 — Frontend**
```bash
cd client
npm start
```

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
