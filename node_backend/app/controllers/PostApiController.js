
const Post = require('../models/post');

class PostApiController {

    // add post
    async createPost(req, res) {

        try {

            const {name,  email, title, completed, body} = req.body

            const data = new Post({
              name,
              email,
              title,
              completed,
              body,
            });

            const post = await data.save();

            return res.status(201).json({

                success: true,
                message: "post created succesfully",
                data: post
            })

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    //read post
    async getPost(req, res) {

        try {

            const data = await Post.find();

            return res.status(200).json({
                success: true,
                message: "post list",
                total: data.length,
                data: data
            })

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }

    //select post
    async getSelectPost(req, res) {

        try {
            const id = req.params.id;

            const data = await Post.findById(id);

            return res.status(200).json({
                success: true,
                message: "get posts",
                data: data,
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    // update post
    async updatePost(req, res) {

        try {

            const id = req.params.id;

            if (!id) {

                return res.status(400).json({
                    success: false,
                    message: "post id is required",
                });
            }

            const data = await Post.findByIdAndUpdate(id, req.body, {new: true});

            return res.status(200).json({
                success: true,
                message: "post updated successfully",
                data:data
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // delete post
    async deletePost(req, res) {

        try {

            const id = req.params.id;

            const data = await Post.findByIdAndDelete(id);

            return res.status(200).json({
                success: true,
                message: "student deleted successfully!!",
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}




module.exports = new PostApiController();