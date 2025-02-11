const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("router/user"); // Relative path se import karna
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware ko sahi tarike se use karna
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB is connected successfully");
}).catch(err => {
    console.error("DB connection error:", err);
});

// User routes ko use karna
app.use("/user", userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});