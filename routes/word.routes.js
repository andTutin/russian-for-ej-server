const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const T = require('cyrillic-to-translit-js');
const Word = require("../models/Word");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");
const router = Router();
const translit = new T();

router.post(
  "/",
  auth,
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
      const candidate = await Word.find({ english });
      
      if (candidate.find(c => c.category === category)) {
        return res.status(400).json({
          message: `Такое слово уже есть в словаре в категории '${category}'!`,
        });
      }

      const { userId } = req.user;
      const { nickname } = await User.findById(userId);
      const newword = new Word({
        english,
        russian,
        translit: translit.transform(russian),
        category,
        addedBy: nickname,
        addedTime: Date.now(),
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
    const { category } = req.query;
    const words = await Word.find({ category });

    res.json(words);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так! Попробуйте снова." });
  }
});

module.exports = router;
