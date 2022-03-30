const worksRouter = require('express').Router()
const Work = require('../models/Work')
require('../utils/cloudinary.config')
const upload = require('../utils/multer')
const commonFunc = require('../utils/utilsFunc')

worksRouter.get('/', async (req, res) => {
    const works = await Work.find({})

    res.json(works)
})

worksRouter.post('/', upload.single('image') , async (req, res) => {
    const body = req.body
    commonFunc.tokenVerifier(req.token, res)

    const featured = body.featured === 'true' ? true: false

    const work = new Work ({
        title: body.title,
        website: body.website,
        platform: JSON.parse(body.platform),
        stack: JSON.parse(body.stack),
        date: body.date,
        imagePath: req.file.path,
        content: body.content,
        featured,
        featuredTech: body.featuredTech,
        filename: req.file.filename,
        repository: body.repository
    })

    if (featured) {
        await Work.updateMany({featured: true}, {featured: false})
     }

    const savedWork = await work.save()

    res.json(savedWork)
})

worksRouter.get('/:id', async (req, res) => {
    const workToGet = await Work.findById(req.params.id)

    res.json(workToGet)
})

worksRouter.put('/:id', upload.single('image'), async (req, res) => {
    const body = req.body
    commonFunc.tokenVerifier(req.token, res)

    const workToUpdate = await Work.findById(req.params.id)

    const featured = body.featured === 'true' ? true : false



    const newWork = {
        title: body.title,
        website: body.website,
        platform: JSON.parse(body.platform),
        stack: JSON.parse(body.stack),
        date: body.date,
        imagePath: req.file?.path || workToUpdate.imagePath,
        content: body.content,
        featured,
        filename: req.file?.filename || workToUpdate.filename,
        repository: body.repository,
        featuredTech: body.featuredTech,
    }
    const updatedWork = await Work.findByIdAndUpdate(req.params.id, newWork, { new: true })

    if (req.file?.path) {
        const imageDelete = workToUpdate.imagePath.substring(62).replace('.png', '')
        commonFunc.deleteImage(imageDelete)
    }

    res.json(updatedWork)
})

worksRouter.delete('/:id', async (req, res) => {
    const workToDelete = await Work.findById(req.params.id)
    commonFunc.tokenVerifier(req.token, res)

    commonFunc.deleteImage(workToDelete.filename)
    await Work.findByIdAndRemove(req.params.id)

    res.status(204).end() 
})

worksRouter.post('/reset', async (req, res) => {
    commonFunc.tokenVerifier(req.token, res)
    const works = await Work.find({})

    works.map(work => {
        commonFunc.deleteImage(work.filename)
    }) 

    await Work.deleteMany({})
    res.status(204).end()
}) 

module.exports = worksRouter