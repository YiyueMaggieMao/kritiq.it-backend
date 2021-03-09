const express = require('express');
const cors = require('cors');
const config = require('./config');
const router = require('./api');

const server = express();
// Allows express to read & parse JSON input
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true})); 

server.use("/api", router); // Registers all routes starting with "/api" to router

// Sets the server to start on port 5000
server.listen(config.PORT, () => {
    console.log("Server started on port " + config.PORT);
});