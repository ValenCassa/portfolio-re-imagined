const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary').v2

const tokenVerifier = (token, res) => {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.username) {
        return res.status(401).json({ error: 'Token missing or invalid' })
    }
}

const deleteImage = (image) => {
    cloudinary.uploader.destroy(image, (err, result) => {
        console.log(result, err)
    })
}

module.exports = {
    tokenVerifier,
    deleteImage,
}