import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  thumbnail_url: {
    type: String,
    required: true,
  }
});

const productSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  video_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
    required: true,
  },
});

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  video_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
    required: true,
  },

});

const Video = mongoose.model("Video", videoSchema);
const Product = mongoose.model("Product", productSchema);
const Comment = mongoose.model("Comment", commentSchema);

export { Video, Product, Comment };