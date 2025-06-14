require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());

// MongoDB connect ONCE here
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Middleware


// Routes
const registerRoute = require('./Routes/register');
const loginRoute = require('./Routes/login');
const addEntryRoute = require('./Routes/addEntry');
const seeEntryRoute = require('./Routes/seeEntry');
app.use('/api/auth', registerRoute);
app.use('/api/auth', loginRoute);
app.use('/api/add', addEntryRoute);
app.use('/api/seeEntry', seeEntryRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running...");
});