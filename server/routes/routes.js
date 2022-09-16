const express = require("express");
const Model = require("../models/model");
const multer = require("multer");
const path = require("path");
const SharpMulter = require("sharp-multer");

const router = express.Router();

const storage = SharpMulter({
  destination: (req, file, cb) => {
    cb(null, path.resolve("public/uploads"));
  },
  imageOptions: {
    fileFormat: "webp",
    quality: 80,
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//Post Method
router.post(
  "/post",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  async (req, res) => {
    const data = new Model({
      News_title: req.body.News_title,
      News_description: req.body.News_description,
      News_body: req.body.News_body,
      News_category: req.body.News_category,
      image: req.files.image[0].filename,
      image1: req.files.image1[0].filename,
      image2: req.files.image2[0].filename,
    });

    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
