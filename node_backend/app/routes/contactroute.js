
const express = require('express');

const ContactController = require('../controllers/ContactController');

const router = express.Router();

router.get('/contact', ContactController.contact);

module.exports = router;