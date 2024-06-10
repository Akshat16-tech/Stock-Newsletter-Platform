import express from 'express';
import multer from 'multer';
import { getBlogs, createBlog, removeBlog } from '../controllers/blogs.js';

const router = express.Router();

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: function (req, file, cb) {
    console.log("filename", file);
    cb(null, file.originalname.replace(/\s+/g, "-"));
  },
});

const upload = multer({ storage: storage });

router.get('/', getBlogs);
router.post('/', upload.single("media"), createBlog);
router.delete('/:id', removeBlog);


export default router;
