const blogsRouter = require('express').Router()
const Blog = require('../models/Blog')
require('../utils/cloudinary.config')
const upload = require('../utils/multer')
const commonFunc = require('../utils/utilsFunc')

blogsRouter.get('/', async (req, res) => {
    const blogs = await Blog.find({})
    res.json(blogs)
})

blogsRouter.post('/', upload.single('image'), async (req, res) => {
    const body = req.body
    commonFunc.tokenVerifier(req.token, res)

    const blog = new Blog({
        title: body.title,
        content: body.content,
        date: body.date,
        type: body.type,
        imagePath: req.file.path,
        filename: req.file.filename
    })

    const savedBlog = await blog.save()

    res.json(savedBlog)
})

blogsRouter.get('/:id', async (req, res) => {
    const blogToGet = await Blog.findById(req.params.id)

    res.json(blogToGet)
})

blogsRouter.put('/:id', upload.single('image'), async (req, res) => {
    const body = req.body
    commonFunc.tokenVerifier(req.token, res)

    const blogToUpdate = await Blog.findById(req.params.id)


    const newBlog = {
        title: body.title,
        content: body.content,
        date: body.date,
        type: body.type,
        imagePath: req.file?.path || blogToUpdate.imagePath,
        filename: req.file?.filename || blogToUpdate.filename
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, newBlog, { new: true })

    if (req.file?.path) {
        const imageDelete = blogToUpdate.imagePath.substring(62).replace('.png', '')
        commonFunc.deleteImage(imageDelete)
    }

    res.json(updatedBlog)
})

blogsRouter.delete('/:id', async (req, res) => {
    const blogToDelete = await Blog.findById(req.params.id)
    commonFunc.tokenVerifier(req.token, res)

    commonFunc.deleteImage(blogToDelete.filename)
    await Blog.findByIdAndRemove(req.params.id)

    res.status(204).end() 
})

blogsRouter.post('/reset', async (req, res) => {
    commonFunc.tokenVerifier(req.token, res)

    const blogs = await Blog.find({})

    
    blogs.map(blog => {
        commonFunc.deleteImage(blog.filename)
    }) 
    await Blog.deleteMany({})
    res.status(204).end()
})

module.exports = blogsRouter 