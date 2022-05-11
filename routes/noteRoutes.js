const router = require('express').Router()
const { Blog, User, Note } = require('../models')
const passport = require('passport')

// get comments
router.get('/notes', passport.authenticate('jwt'), async function (req, res) {
  const notes = await Note.find({ include: [User, Blog] })
  res.json(notes)
  console.log(notes)
})

//post a comment
router.post('/notes/:id', passport.authenticate('jwt'), async function (req, res) {
  const note = await Note.create({
    text: req.body.body,
    pid: req.body.pid,
    uid: req.user.id,
    username: req.session.username
  })
  res.json(note)
})

module.exports = router