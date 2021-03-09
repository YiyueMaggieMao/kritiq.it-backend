const express = require('express');
const router = express.Router();

// The route that returns all the posts
router.get('/posts', (req, res) => {
    const posts = [{"author": "Stanley Lee"}, {"author": "Jeffrey Ha"}];
    res.status(200).json({posts});
});

// The route that adds a posts to the database
router.post('/posts', (req, res) => {
    console.log("Hey I'm stil alive");
    console.log(req.body);
    res.status(200).json(req.body);
})

module.exports = router;