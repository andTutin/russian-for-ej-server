require("dotenv").config();
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post(
  "/register",
  [
    check("nickname", "Введите Никнэйм").exists(),
    check("password", "Минимум 6 символов").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при регистрации",
        });
      }

      const { nickname, password } = req.body;
      const candidate = await User.findOne({ nickname });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует!" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ nickname, password: hashedPassword });

      await user.save();
      res.status(201).json({ message: "Пользователь создан!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `I'm not saying it was aliens, but it was aliens` });
    }
  }
);

router.post(
  "/login",
  [
    check("nickname", "Введите никнэйм").exists(),
    check("password", "Введите пароль").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при попытке входа",
        });
      }

      const { nickname, password } = req.body;
      const user = await User.findOne({ nickname });

      if (!user) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким именем не найден" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Пароль указан неверно" });
      }

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({ token, userId: user.id });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так! Попробуйте снова." });
    }
  }
);

module.exports = router;
