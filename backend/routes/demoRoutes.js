const express = require("express");
const demoController = require("../controllers/demo");
const router = express.Router();

router.post("/book-demo", demoController.bookDemo);

module.exports = router;
