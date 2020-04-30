const express = require("express");
const router = express.Router();
const axios = require("axios");
const Recipe = require("../../models/Recipe");

router.post("/", (req, res) => {
  axios
    .get(
      `https://api.edamam.com/search?q=${req.body.query}&app_id=${process.env.RECIPE_ID}&app_key=${process.env.RECIPE_KEY}&from=0&to=5`,
      {}
    )
    .then(result => {
      res.json({ data: result.data });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

router.post("/update", (req, res) => {
  axios
    .get(
      `https://api.edamam.com/search?q=${req.body.query}&app_id=${process.env.RECIPE_ID}&app_key=${process.env.RECIPE_KEY}&from=0&to=5&calories=${req.body.calories}`,
      {}
    )
    .then(result => {
      res.json({ data: result.data });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

router.post("/save", (req, res) => {
  Recipe.findOne({ label: req.body.name }, (err, recipe) => {
    if (recipe) {
      res.json({ type: "error", message: "Recipe already saved!" });
    } else {
      let recipe = new Recipe({
        recipeId: req.body.recipeId,
        id: req.body.id,
        name: req.body.name,
        link: req.body.link,
        image: req.body.image
      });
      recipe.save((err, recipe) => {
        if (err) {
          res.json({ type: "error", message: "Error saving recipe!" });
        } else {
          res.json(recipe);
        }
      });
    }
  });
});

router.get("/save/:id", (req, res) => {
  Recipe.find({ user: req.params.userId }, (err, items) => {
    if (!err) {
      res.status(200).json(items);
    } else {
      res.status(500).json({ err });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  Recipe.deleteOne({ _id: req.params.id }, err => {});
});

module.exports = router;
