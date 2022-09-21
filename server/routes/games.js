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

// POST /games
router.post("/", async (req, res, next) => {
  try {
    const game = await Game.create(req.body);
    res.send(game);
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

// UPDATE /games/:id
router.put("/:id", async (req, res, next) => {
  try {
    const game = await Game.update(req.body, {
      where: {id:req.params.id}
    });
    res.send(game);
  } catch (error) {
    next(error);
  }
});


// DELETE /games/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const games = await Game.destroy({
      where: {id:req.params.id}
    });
    res.send(games);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
