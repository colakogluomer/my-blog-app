import express from "express";
const router = express.Router();
import PostService from "../services/PostService.js";

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const post = await PostService.add(req.body);
    res.json(post);
    console.log("post created");
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const posts = await PostService.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

export default router;
