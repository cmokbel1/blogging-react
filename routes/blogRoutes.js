const router = require('express').Router()
const { Blog, User, Note } = require('../models')
const passport = require('passport')

// get all blogs
router.get('/blogs', async function (req, res) {
  const blogs = await Blog.find({ include: [User, Note] })
  res.json(blogs)
})

// //get one post 
router.get('/blogs/:id', passport.authenticate('jwt'), async function (req, res) {
  const blogs = await Blog.findOne({ where: {id: req.params.id}, include: [User, Note] })
  res.json(blogs)
})

//post one post
// authenticate that the user is the website master to have access to posting blogs
router.post('/blogs', passport.authenticate('jwt'), async function (req, res) {
  const blog = await Blog.create({
    body: req.body.body,
    title: req.body.title,
    uid: req.session.userId
  })
  res.json(blog)
})

///edit a ppost n shit
router.put('/blogs/:id', passport.authenticate('jwt'), async function (req, res) {
  const blog = await Blog.findByIdAndUpdate({
    body: req.body.body,
    title: req.body.title
  },
    { where: { id: req.params.id } })
  res.json(blog)
})

//delete a blog or note
router.delete('/blogs/:id', passport.authenticate('jwt'), async function (req, res) {
  let blog = await Blog.findByIdAndDelete({ where: { id: req.params.id, uid: req.session.userId } })

  if (blog > 0) {
    await Note.findByIdAndDelete({ where: { uid: req.params.id } })
  }
  res.sendStatus(200)
})

module.exports = router