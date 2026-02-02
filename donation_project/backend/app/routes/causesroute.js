
const express = require('express');

const CausesController = require('../controllers/CausesController');

const router = express.Router();

router.get('/causes', CausesController.causes);

module.exports = router;