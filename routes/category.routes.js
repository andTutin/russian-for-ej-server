const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const Category = require("../models/Category");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");
const router = Router();

router.post(
  "/",
  auth,
  [check("category", "Введи название категории").isLength({ min: 1 })],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Введите название Категории",
        });
      }

      const { category } = req.body;
      const candidate = await Category.findOne({ title: category });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такая Категория уже существует!" });
      }

      const { userId } = req.user;
      const { nickname } = await User.findById(userId);
      const newcategory = new Category({ title: category, addedBy: nickname });

      await newcategory.save();
      res.status(201).json({ message: "Категория создана!", newcategory });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так! Попробуйте снова." });
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();

    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так! Попробуйте снова." });
  }
});

module.exports = router;
