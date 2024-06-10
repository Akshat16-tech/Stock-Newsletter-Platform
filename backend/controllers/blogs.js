import express from 'express';
import Blog from '../models/blog.js';

const router = express.Router();

// GET route to fetch all blog posts
export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}

export const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create({
            title: req.body.title,
            content: req.body.content,
            tag: req.body.tag,
            image: req.file.filename,
            // email: req.body.email,
        });
        res.json({ status: 200 });
    } catch (error) {
        res.json({ status: "error", send: error });
    }
}

export const removeBlog = async (req, res) => {
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
}