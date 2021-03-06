const { Router } = require("express");
const config = require("config");
const { check, validationResult } = require("express-validator");
const Category = require("../models/Category");
const router = Router();

router.post(
  "/add",
  [check("category", "Введи название категории").exists()],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при добавлении Категории",
        });
      }

      const { category } = req.body;
      const candidate = await Category.findOne({ category });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такая Категория уже существует!" });
      }

      const newcategory = new Category({ title: category });

      await newcategory.save();
      res.status(201).json({ message: "Категория создана!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `I'm not saying it was aliens, but it was aliens` });
    }
  }
);

router.get("/", async (req, res) => {
  const categories = await Category.find()
  res.json(categories);
});

module.exports = router;
