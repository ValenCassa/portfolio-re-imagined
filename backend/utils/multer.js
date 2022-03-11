const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'BlogsImages',
        allowedFormats: ['jpg', 'png'],
    }
})

module.exports = multer({ storage: storage, fileFilter(req, file, cb) {
    if (!req.token) {
        cb(null, false)
    } else {
        cb(null, true)
    }
} })