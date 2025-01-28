const express = require("express");
const app = express();
const port = 3000;

require("dotenv").config();

// Middleware to parse JSON
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static("public"));

app.get("/api/v1/serverName", (req, res) => {
  res.json({
    serverName: `${process.env.SERVER_NAME}.${process.env.HOST}`,
  });
});

// Basic root route
// app.get("/", (req, res) => {
//   res.send("Welcome to the Express server!");
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
