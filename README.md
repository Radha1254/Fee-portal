# Fees Management System

A secure and scalable full-stack Fees Management System developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application provides secure authentication, user-specific authorization, payment management, and fee tracking through an interactive dashboard.

---

## 🚀 Features

- User Signup & Login Authentication
- JWT-Based Secure Authentication
- Password Hashing using bcrypt
- Protected Routes & APIs
- User-Specific Dashboard
- Add & Delete Fee Payments
- Payment History Management
- Total / Paid / Due Fee Summary
- Responsive and Clean User Interface
- MongoDB Database Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication & Security
- JWT (JSON Web Token)
- bcrypt.js

---

## 📂 Project Structure

```bash
Fee-portal/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Radha1254/Fee-portal.git
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend server:

```bash
node server.js
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔐 Authentication Flow

1. User Signup
2. Secure Password Hashing
3. User Login
4. JWT Token Generation
5. Token Stored in LocalStorage
6. Protected Dashboard Access
7. Authorized Payment Operations

---

## 📊 Modules Included

### User Authentication Module
- Signup
- Login
- JWT Verification

### Payment Management Module
- Add Payment
- View Payment History
- Delete Payment

### Dashboard Module
- Total Fees
- Paid Fees
- Due Amount

### Authorization Module
- User-specific Data Access
- Protected APIs
- Ownership Verification

---

## 🧠 Key Concepts Used

- REST API Development
- Authentication & Authorization
- Middleware
- MongoDB CRUD Operations
- React State Management
- Protected Routes
- Client-Server Architecture


---

## 🔮 Future Enhancements

- Online Payment Gateway Integration
- Admin Dashboard
- PDF Receipt Generation
- Email Notifications
- Advanced UI/UX Improvements

---

## 👨‍💻 Author

**Radha Jadon**  
B.Tech CSE – Vikrant University

---

## 📌 Conclusion

The Fees Management System successfully demonstrates the implementation of a secure full-stack web application using the MERN stack. The project focuses on authentication, authorization, database integration, and user-specific fee management while maintaining security and data consistency.
