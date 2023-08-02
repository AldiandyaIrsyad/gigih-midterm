
import { Video, Product, Comment } from '../models/model.js';

const controller = {
    // get all videos
    getAllVideos: async (req, res) => {
        try {
            const videos = await Video.find();
            res.json(videos);
        } catch (error) {
            console.error(error.message);
        }
    },
    // get product in video /:id/products
    getProductInVideo: async (req, res) => {
        try {
            const products = await Product.find({ video_id: req.params.id });
            res.json(products);
        } catch (error) {
            console.error(error.message);
        }
    },

    // get comment in video /:id/comments
    getCommentInVideo: async (req, res) => {
        try {
            console.log(req.params.id);
            const comments = await Comment.find({ video_id: req.params.id });
            console.log(comments);
            res.json(comments);
        } catch (error) {
            console.error(error.message);
        }
    },

    // post comment in video /:id/comments
    postCommentInVideo: async (req, res) => {
        try {
            const { username, text } = req.body;
            const newComment = new Comment({
                username,
                text,
                video_id: req.params.id,
            });
            const comment = await newComment.save();
            res.status(201).json(comment);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error');
        }
    }
}

export default controller;