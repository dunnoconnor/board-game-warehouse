const express = require("express");
const router = express.Router();
const { Game } = require("../models");

// GET /games
router.get("/", async (req, res, next) => {
  try {
    const games = await Game.findAll();
    res.send(games);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
