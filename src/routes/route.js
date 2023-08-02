// route.js
// import router
import express from 'express';
import controller from '../controllers/controller.js';

const router = express.Router();


router.get('/', (req, res) => {
    controller.getAllVideos(req, res);
});

router.get('/:id/products', (req, res) => {
    controller.getProductInVideo(req, res);
});

router.get('/:id/comments', (req, res) => {
    controller.getCommentInVideo(req, res);
});

router.post('/:id/comments', (req, res) => {
    controller.postCommentInVideo(req, res);
});



export default router;