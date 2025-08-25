const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require("./routes/todoRoutes");
const path = require("path");

const app = express();
const PORT = 3000;

//Create middleware to READ JSON
app.use(bodyParser.json());

// Serve frontend files from /public
app.use(express.static(path.join(__dirname, "public")));

//Routes for todo items
app.use("/api/todos", todoRoutes);

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});