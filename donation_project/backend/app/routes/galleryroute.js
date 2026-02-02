
const express = require('express');

const GalleryController = require('../controllers/GalleryController');

const router = express.Router();

router.get('/gallery', GalleryController.gallery);

module.exports = router;