require('dotenv').config()

const mongoURL = process.env.MONGO_URI

const PORT = process.env.PORT

module.exports = {
    mongoURL,
    PORT
}