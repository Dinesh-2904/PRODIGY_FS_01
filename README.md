# PRODIGY_FS_01

 Secure User Authentication System

A secure authentication and authorization system built using **Node.js, Express.js, MongoDB, JWT, and bcryptjs**. This project was developed as part of the **Prodigy InfoTech Full Stack Development Internship (Task 01)** and demonstrates secure user registration, login, password hashing, JWT authentication, protected routes, and role-based access control.

---

## 📌 Task Objective

Develop a secure user authentication system that:

* Allows users to register and log in
* Stores passwords securely using hashing
* Generates and validates JWT tokens
* Protects sensitive routes
* Implements role-based access control

---

## 🚀 Features

✅ User Registration

✅ User Login Authentication

✅ Password Hashing using bcrypt

✅ JWT Token Generation

✅ JWT Token Verification

✅ Protected Routes

✅ Role-Based Access Control (Admin/User)

✅ MongoDB Database Integration

✅ Error Handling

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT (JSON Web Token)
* bcryptjs

### Development Tools

* VS Code
* Postman
* MongoDB Compass

---

## 📂 Project Structure

```text
PRODIGY_FS_01/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/your-username/PRODIGY_FS_01.git
cd PRODIGY_FS_01
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/authdb
JWT_SECRET=mysecretkey
```

### Start MongoDB

```bash
mongod
```

### Run the Application

```bash
npm run dev
```

Server will start at:

```text
http://localhost:5000
```

---

## 🔑 API Endpoints

### Register User

**POST**

```http
/api/auth/register
```

#### Request Body

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456"
}
```

#### Response

```json
{
  "message": "User Registered Successfully"
}
```

---

### Login User

**POST**

```http
/api/auth/login
```

#### Request Body

```json
{
  "email": "john@gmail.com",
  "password": "123456"
}
```

#### Response

```json
{
  "token": "JWT_TOKEN"
}
```

---

### Dashboard Route (Protected)

**GET**

```http
/api/auth/dashboard
```

#### Header

```text
Authorization: Bearer JWT_TOKEN
```

#### Response

```json
{
  "message": "Protected Route Accessed"
}
```

---

### Admin Route

**GET**

```http
/api/auth/admin
```

#### Header

```text
Authorization: Bearer JWT_TOKEN
```

#### Response

```json
{
  "message": "Admin Access Granted"
}
```

---

## 🔒 Security Features

### Password Hashing

Passwords are hashed before being stored in MongoDB.

```javascript
const hashedPassword = await bcrypt.hash(password, 10);
```

### JWT Authentication

JWT tokens are generated upon successful login.

```javascript
const token = jwt.sign(
{
    id: user._id,
    role: user.role
},
process.env.JWT_SECRET
);
```

### Route Protection

Protected routes require a valid JWT token.

```javascript
authMiddleware
```

### Role-Based Authorization

Admin routes are accessible only to users with the admin role.

```javascript
roleMiddleware("admin")
```

---

## 🧪 Testing

The application was tested using Postman.

### Test Cases

| Test Case                    | Status   |
| ---------------------------- | -------- |
| User Registration            | ✅ Passed |
| User Login                   | ✅ Passed |
| Password Hashing             | ✅ Passed |
| JWT Generation               | ✅ Passed |
| Protected Route Access       | ✅ Passed |
| Unauthorized Access Handling | ✅ Passed |
| Admin Route Access           | ✅ Passed |


---

## 📈 Future Enhancements

* Email Verification
* Password Reset Functionality
* Refresh Tokens
* Multi-Factor Authentication (MFA)
* Google OAuth Authentication
* GitHub OAuth Authentication
* User Profile Management

---

## 🎓 Learning Outcomes

Through this project, I gained practical experience in:

* REST API Development
* Authentication & Authorization
* Password Hashing Techniques
* JWT Token Management
* MongoDB Integration
* Middleware Development
* Secure Backend Development

---

## 📚 References

* Node.js Documentation
* Express.js Documentation
* MongoDB Documentation
* JWT Documentation
* bcryptjs Documentation

 Author

**Dinesh R N**

Prodigy InfoTech – Full Stack Development Internship

Task: **PRODIGY_FS_01**
