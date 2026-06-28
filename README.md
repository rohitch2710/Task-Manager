# Task-Manager
# ✅ Full-Stack Task Manager App

A full-stack Task Manager web app with secure user login (JWT), task creation/editing, status toggling (Pending/Completed), and a beautiful, filterable dashboard UI.

---

## 🔥 Features

- 👤 User authentication (JWT-based login)
- ➕ Create task (title + description)
- 📝 Edit task details
- ✅ Toggle task status (Pending / Completed)
- ❌ Delete tasks
- 📄 Task list in table layout
- 🎯 Filters: All | Pending | Completed
- 📅 Tracks created and updated dates
- 🚀 Responsive and clean UI

---

## 🧩 Tech Stack

| Layer    | Tech                          |
|----------|-------------------------------|
| Frontend | React, Axios, React Router DOM|
| Backend  | Node.js, Express.js           |
| DB       | PostgreSQL                    |
| Auth     | JWT (JSON Web Token)          |
| Styling  | Custom CSS                    |

---



- 🟢 Login Page  
- 🟢 Task Dashboard  
- 🟢 Filters (All / Pending / Completed)  
- 🟢 Task CRUD in action

---

## 📁 Folder Structure

```
task-manager/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│
├── README.md
```

---

## ⚙️ Setup Instructions

### ⚡ Prerequisites

- Node.js v18+
- PostgreSQL installed and running
- Create a database named: `taskmanager`

---

### 🛠️ Step-by-Step Setup

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

#### 🧪 Create `.env` in `/backend`

```env
PORT=5000
DATABASE_URL=postgresql://postgres:<your_password>@localhost:5432/taskmanager
JWT_SECRET=myVerySecretKey
```

> Replace `<your_password>` with your PostgreSQL password

#### 🔁 Run the Backend

```bash
npm start
```

Runs on: `http://localhost:5000`

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

#### 🌐 Create `.env` in `/frontend`

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

#### 🧩 Run the Frontend

```bash
npm start
```

Opens on: `http://localhost:3000`

---

## 🧠 Approach

We structured the app using a standard **MERN-like split**. The backend handles user authentication and task logic, exposing REST APIs. JWT is used to protect routes. The frontend manages routing via `react-router-dom`, and persists the login state with `localStorage`.

All UI is built with responsive and modern design principles.

---

## ⚠️ Challenges Faced

- Syncing authentication and route protection across frontend
- Handling JWT expiration and logout
- State management when editing tasks vs creating new
- Styling table + filter UI cleanly
- Fixing blank screen on logout: resolved by correct route handling with `useNavigate`

---

## 🌱 Future Improvements

- Add pagination to tasks
- Add user profile management
- Upload attachments/images per task
- Search functionality
- Mobile-first redesign

---

## 🧑‍💻 Author

> Developed by **Rohit Chaudhary**  
> 🔗 GitHub: rohitch2710

---

## 📄 License

MIT License – Free to use and modify.

---
