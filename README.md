# 📝 Todo List Application

A full-stack **Task Management** web application developed using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. The application enables users to efficiently create, view, update, and delete tasks through a clean and responsive interface.

This project was developed during my **6-month Full Stack Development Internship at Codec Technologies Pvt. Ltd.** and demonstrates CRUD operations, RESTful API development, and frontend-backend integration.

---

## 🚀 Features

- ➕ Add new tasks
- 📋 View all tasks
- ✏️ Update existing tasks
- 🗑️ Delete tasks
- 🔄 Real-time CRUD operations
- 🌐 RESTful API integration
- 📱 Responsive user interface
- 💾 MongoDB database connectivity

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## 📂 Project Structure

```text
Todo-List-Application/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── App.test.js
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── server/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── screenshots/
│   ├── home.png
│   └── edit-task.png
│
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/vighneshmunde/Todo-List-Application.git
```

### 2. Navigate to the project directory

```bash
cd Todo-List-Application
```

### 3. Install Frontend Dependencies

```bash
cd client
npm install
```

### 4. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

### 5. Configure MongoDB

- Install **MongoDB Community Server**
- Open **MongoDB Compass**
- Ensure the MongoDB service is running
- Create a database (if required)

### 6. Configure Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todolist
```

Replace **todolist** with your database name if it is different.

---

## ▶️ Running the Application

### Start Backend (Production)

```bash
npm start
```

### Start Backend (Development)

```bash
npm run dev
```

### Start Frontend

```bash
cd client
npm start
```

### Open the Application

```
http://localhost:3000
```

---

## 📸 Application Screenshots

### Home Page

![Home Page](screenshots/home.png)

---

### Edit Task

![Edit Task](screenshots/edit-task.png)

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Developing full-stack web applications using the MERN stack
- Building RESTful APIs with Express.js
- Implementing CRUD operations
- Connecting React.js frontend with Node.js backend
- Working with MongoDB and Mongoose
- Managing application state in React
- Organizing a client-server project structure

---

## 🚀 Future Enhancements

- User Authentication (Login & Registration)
- Task Categories
- Due Dates and Reminders
- Task Priority Levels
- Search and Filter Tasks
- Dark Mode
- Responsive Mobile Optimization

---

## 💼 Internship

This project was developed as part of my **6-month Full Stack Development Internship** at **Codec Technologies Pvt. Ltd.**

---

## 👨‍💻 Author

**Vighnesh Munde**

- GitHub: https://github.com/vighneshmunde
- LinkedIn: https://linkedin.com/in/vighneshmunde

---

⭐ If you found this project useful, consider giving it a star on GitHub!
