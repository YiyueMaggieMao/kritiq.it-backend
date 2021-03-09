const express = require('express');

const server = express();
const router = express.Router();
server.use("/", router); // Registers all routes starting with "/" to router

// The route that returns all the posts
router.get('/posts', (req, res) => {
    res.status(200).json({"author": "Stanley Lee"});
});

// Sets the server to start on port 5000
server.listen(5000, () => {
    console.log("Server started on port 5000");
});