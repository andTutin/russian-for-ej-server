const { Router } = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");
const jwt = require("jsonwebtoken");
const router = Router();

router.post(
  "/register",
  auth,
  [
    check("nickname", "Отсутсвует никнэйм").isLength({ min: 1 }),
    check("password", "Пароль должен быть минимум 6 символов длиной").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: errors.array()[1]
            ? errors.array()[0].msg + "\n" + errors.array()[1].msg
            : errors.array()[0].msg,
        });
      }

      const { nickname, password } = req.body;
      const candidate = await User.findOne({ nickname });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует!" });
      }

      const hashedPassword = await bcrypt.hash(password, 8);
      const user = new User({ nickname, password: hashedPassword });

      await user.save();
      res.status(201).json({ message: "Пользователь создан!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так! Попробуйте снова." });
    }
  }
);

router.post(
  "/login",
  [
    check("nickname", "Введите никнэйм").isLength({ min: 1 }),
    check("password", "Введите пароль").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Некорректные данные при попытке входа",
        });
      }

      const { nickname, password } = req.body;
      const user = await User.findOne({ nickname });

      if (!user) {
        return res.status(400).json({ message: "Ошибка авторизации" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Ошибка авторизации" });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(200).json({ token, userId: user.id });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так! Попробуйте снова." });
    }
  }
);

module.exports = router;
