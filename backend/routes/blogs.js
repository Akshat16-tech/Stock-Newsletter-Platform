const express = require("express");
const router = express.Router();
const multer = require("multer");
const Blog = require("../modules/blog");
const path = require("path");

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/\s+/g, "-"));
  },
});

var upload = multer({ storage: storage });

// POST route to create a new blog post with an image
router.post("/", upload.single("media"), async (req, res) => {
  try {
    // Create new blog post
    const blog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      tag: req.body.tag,
      image: req.file.filename,
      email: req.body.email,
    });
    res.json({ status: 200 });
  } catch (error) {
    res.json({ status: "error", send: error });
  }
});

// GET route to fetch all blog posts
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res
        .status(404)
        .json({ status: "error", message: "Blog not found" });
    }
    res.json({ status: 200, message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// router.put("/api/blog/:id", upload.single("media"), async (req, res) => {
//   try {
//     const blog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       {
//         title: req.body.title,
//         content: req.body.content,
//         tag: req.body.tag,
//         image: req.file ? req.file.filename : undefined,
//         email: req.body.email,
//       },
//       { new: true }
//     );

//     if (!blog) {
//       return res.status(404).json({ error: "Blog post not found" });
//     }

//     res.json({ status: 200, data: blog });
//   } catch (error) {
//     res.json({ status: "error", error: error.message });
//   }
// });

module.exports = router;
