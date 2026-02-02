
const express = require('express');

const SinglecausesController = require('../controllers/SinglecausesController');

const router = express.Router();

router.get('/singlecauses', SinglecausesController.singlecauses);

module.exports = router;