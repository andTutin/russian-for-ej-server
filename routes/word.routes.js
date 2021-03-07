const { Router } = require("express");
const config = require("config");
const { check, validationResult } = require("express-validator");
const Word = require("../models/Word");
const router = Router();

router.post(
  "/add",
  [
    check("english", "Введи слово на английском").isLength({ min: 1 }),
    check("russian", "Введи слово на русском").isLength({ min: 1 }),
    check("category", "Выбери категорию").isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Некорректные данные при добавлении Слова",
        });
      }

      const { english, russian, category } = req.body;
      const candidate = await Word.findOne({ english });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такое слово уже есть в словаре!" });
      }

      const newword = new Word({ english, russian, category });

      await newword.save();
      res.status(201).json({ message: "Слово добавлено!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так! Попробуйте снова." });
    }
  }
);

router.post(
  "/",
  [check("category", "В теле запроса отсутсвует Категория").exists()],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "В теле запроса отсутствует Категория",
        });
      }

      const { category } = req.body;
      const words = await Word.find({ category });

      res.json(words);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так! Попробуйте снова." });
    }
  }
);

module.exports = router;
