const express = require('express');
const config = require('./config');

const server = express();
const router = express.Router();
server.use("/api", router); // Registers all routes starting with "/api" to router

// The route that returns all the posts
router.get('/posts', (req, res) => {
    res.status(200).json([{"author": "Stanley Lee"}, {"author": "Jeffrey Ha"}]);
});

// Sets the server to start on port 5000
server.listen(config.PORT, () => {
    console.log("Server started on port " + config.PORT);
});