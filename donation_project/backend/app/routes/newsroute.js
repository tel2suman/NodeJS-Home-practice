
const express = require('express');

const NewsController = require('../controllers/NewsController');

const router = express.Router();

router.get('/news', NewsController.news);

module.exports = router;