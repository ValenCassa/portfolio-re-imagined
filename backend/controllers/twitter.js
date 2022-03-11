const twitterRouter = require('express').Router()
const { ToadScheduler, SimpleIntervalJob, AsyncTask } = require('toad-scheduler')
const axios = require('axios')

let followers = 16
let following = 32

const config = {
    headers: { Authorization: process.env.TWITTER_API_KEY }
  } 
const scheduler = new ToadScheduler()

// Fetch twitter followers
const followersTask = new AsyncTask(
    'twitter fetch followers',
    () => { return axios.get('https://api.twitter.com/2/users/1483912695292252160/followers', config).then((data) => { 
        followers = data.data.meta.result_count
            }
        ) }
)
const followersHandler = new SimpleIntervalJob({ minutes: 30 }, followersTask)
scheduler.addSimpleIntervalJob(followersHandler)

// Fetch twitter following
const followingTask = new AsyncTask(
    'twitter fetch',
    () => { return axios.get('https://api.twitter.com/2/users/1483912695292252160/following', config).then((data) => { 
        following = data.data.meta.result_count 
            }
        ) }
)
const followingHandler = new SimpleIntervalJob({ minutes: 30 }, followingTask)
scheduler.addSimpleIntervalJob(followingHandler)


twitterRouter.get('/', async (req, res) => {

    res.json({ followers, following })
})


module.exports = twitterRouter