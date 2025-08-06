// routes/diary.js

const express = require('express');
const router = express.Router();
const Diary = require('../models/Diary'); // Make sure to create this model

// @route   GET /api/diary
// @desc    Get all diary articles
router.get('/', async (req, res) => {
  try {
    const articles = await Diary.find().sort({ date: -1 });
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/diary
// @desc    Create a new diary article
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newDiary = new Diary({
      title,
      content,
    });
    const article = await newDiary.save();
    res.json(article);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;