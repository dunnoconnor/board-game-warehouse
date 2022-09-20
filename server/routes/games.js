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

// GET /games/:id
router.get("/:id", async (req, res, next) => {
  try {
    const games = await Game.findByPk(req.params.id);
    res.send(games);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
