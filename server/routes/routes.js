const express = require("express");
const Model = require("../models/model");

const router = express.Router();

//Post Method
router.post("/post", async (req, res) => {
  const data = new Model({
    News_title: req.body.News_title,
    News_body: req.body.News_body,
    News_category: req.body.News_category,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", (req, res) => {
  res.send("Get All API");
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send("Get by ID API");
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

module.exports = router;
