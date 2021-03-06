const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const T = require("cyrillic-to-translit-js");
const Word = require("../models/Word");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");
const Category = require("../models/Category");
const router = Router();
const translit = new T();

router.post(
  "/",
  auth,
  [
    check("english", "Введи слово на английском").isLength({ min: 1 }),
    check("russian", "Введи слово на русском").isLength({ min: 1 }),
    check("categoryId", "Выбери категорию").isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Некорректные данные при добавлении Слова",
        });
      }

      const { english, russian, categoryId } = req.body;
      const candidate = await Word.findOne({ english, categoryId });

      if (candidate) {
        const { title } = await Category.findById(categoryId);

        return res.status(400).json({
          message: `Такое слово уже есть в словаре в категории '${title}'!`,
        });
      }

      const { userId } = req.user;
      const { nickname } = await User.findById(userId);
      const newword = new Word({
        english,
        russian,
        translit: translit.transform(russian),
        categoryId,
        author: nickname,
      });

      await newword.save();
      res.status(201).json({ message: "Слово добавлено!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так! Попробуйте снова." });
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const words = await Word.find();

    res.json(words);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так! Попробуйте снова." });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { categoryId } = req.query;
    const words = await Word.find({ categoryId });

    res.json(words);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так! Попробуйте снова." });
  }
});

module.exports = router;
