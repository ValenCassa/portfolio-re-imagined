const jwt = require('jsonwebtoken')
const loginRouter = require('express').Router()

loginRouter.post('/', async (req, res) => {
    const body = req.body
    const checkIfUser = body.username === process.env.USERNAME && body.password === process.env.PASSWORD

    if (!checkIfUser) {
        return res.status(401).json({
            error: 'Invalid username or password'
        })
    }

    const userForToken = {
        username: body.username,
    }

    const token = jwt.sign(
        userForToken,
        process.env.SECRET,
        { expiresIn: 60*60 }
    )
    
    res
        .status(200)
        .send({ token, username: body.username })
})

module.exports = loginRouter