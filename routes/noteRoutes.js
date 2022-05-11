const router = require('express').Router()
const { Blog, User, Note } = require('../models')
const passport = require('passport')

// get comments
router.get('/notes', passport.authenticate('jwt'), async function (req, res) {
  const notes = await Note.find()
  res.json(notes)
  console.log(notes)
})

//post a comment
router.post('/notes/:id', passport.authenticate('jwt'), async function (req, res) {
  const note = await Note.create({
    text: req.body.body,
    blog: req.body.pid,
    user: req.user.id,
    username: req.user.username
  })
  res.json(note)
})

module.exports = router