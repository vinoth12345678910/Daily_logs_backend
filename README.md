# Daily Thoughts API

🚀 *A simple API that lets users track their daily thoughts.*

Using *![Node.js](https://nodejs.org/static/images/logo.svg)* Node.js, Express, Mongoose, JWT for authentication, and bcrypt for password hashing.

This API allows:

- User registration and login.
- Adding daily entries (up to 30 words).
- Viewing all entries of a particular user.
- Token authentication for securing routes.

---

## API Endpoints

| Method | Route | Description |
|---------|---------|---------|
| *POST* | /api/auth/register | Register a new user |
| *POST* | /api/auth/login | Log in and retrieve a JWT |
| *POST* | /api/entry/add | Add a daily entry (protected) |
| *GET* | /api/entry/mylogs | View all your entries (protected) | 


---

## Summary

Using *Hugging Face API*, this application highlights the main points of each daily entry and shows all your previous entries in a simple way.

---
