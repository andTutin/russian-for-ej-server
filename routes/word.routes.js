const { Router } = require("express");
const config = require("config");
const { check, validationResult } = require("express-validator");
const Word = require("../models/Word");
const router = Router();

router.post(
  "/add",
  [
    check("english", "Введи слово на английском").exists(),
    check("russian", "Введи слово на русском").exists(),
    check("category", "Выбери категорию").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
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
        .json({ message: `I'm not saying it was aliens, but it was aliens` });
    }
  }
);

module.exports = router;
