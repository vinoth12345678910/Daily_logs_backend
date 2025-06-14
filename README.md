# Daily Logs - Backend API

This is a *Node.js + Express + MongoDB backend API* for a Daily Logs application.  
It lets *registered and authenticated users*:

✅ Register and login  
✅ Add daily entries  
✅ View their own entries  

The API uses *JWT authentication* and *bcrypt password hashing*.

---

## 🔹 Tech Stack:

- *Node.js*
- *Express*
- *Mongoose (for accessing MongoDB)*
- *JWT for authentication*
- *bcrypt for password hashing*

---

## 🔹 API Endpoints:

✅ POST /api/auth/register — Register a new user  
✅ POST /api/auth/login — Log in and receive a JWT  
✅ POST /api/entry/add — Add a new daily entry (protected, requires JWT)  
✅ GET /api/entry/my-entries — Retrieve all entries for the authenticated user (protected, requires JWT)

---

## 🔹 Installation:

1. *Clone this repository:*
bash
git clone https://github.com/your-username/daily-logs-backend.git


2. *Install the dependencies:*
bash
npm install


3. **Create a .env file in the root directory with the following:**

MONGODB_URL=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>


4. *Start the server:*
bash
npm start


---

## 🔹 Notes:

- The API expects requests to be made with *Bearer Token Authentication* for protected routes.
- Passwords are hashed and never stored in plain text.

---

## 🔹 Suggested directory structure:


daily-logs-backend/
├── .env
├── package.json
├── app.js
├── models/
│ ├─ User.js
│ └─Entry.js
├── routes/
│ ├─ auth.js
│ └─ entry.js
├── middleware/
│ └─ auth.js
├── README.md
