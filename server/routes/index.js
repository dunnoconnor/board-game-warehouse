const express = require("express");
const router = express.Router();

// different model routers
router.use('/games', require('./games'));

module.exports = router;
