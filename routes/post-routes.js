const express = require("express");
const router = express.Router();

const postControllers = require("../controllers/post-controllers");

router.get("/posts", postControllers.getPosts);

module.exports = router;
