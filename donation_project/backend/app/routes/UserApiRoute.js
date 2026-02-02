
const express =require('express');

const UserApiController = require('../controllers/UserApiController');

const router = express.Router();

router.post('/create/user',UserApiController.createUser);

router.get('/user', UserApiController.getUser);

router.get('/edit/:id', UserApiController.getEditUser);

router.put('/update/:id', UserApiController.updateUser);

router.delete('/delete/:id', UserApiController.deleteUser);

module.exports = router;