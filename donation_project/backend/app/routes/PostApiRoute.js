
const express = require('express');

const PostApiController = require('../controllers/PostApiController');

const router = express.Router();

router.post('/create/post', PostApiController.createPost);

router.get('/post', PostApiController.getPost);

router.get('/edit/:id', PostApiController.getSelectPost);

router.put('/update/:id', PostApiController.updatePost);

router.delete('/delete/:id', PostApiController.deletePost);


module.exports = router;