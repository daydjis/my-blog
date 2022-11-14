import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'

import { postCreateValidation, registerValidation } from './validations/auth.js'

import { register, login, getMe } from './controllers/UserController.js'
import * as PostController from './controllers/PostControllers.js'
import checkAuth from './utils/checkAuth.js'

mongoose
  .connect(
    'mongodb+srv://daydji:ronaldo4721@cluster0.2d9sn8n.mongodb.net/blog?retryWrites=true&w=majority'
  )
  .then(() => console.log('Db ok'))
  .catch((err) => console.log('Db error', err))

const app = express()

const storage = multer.diskStorage({
  destination: (_, __) => {
    cb(null, 'uploads')
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage })

app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.get('/', (req, res) => {
  res.send('hello world!')
})
app.get('/auth/me', checkAuth, getMe)

app.post('/auth/login', login)
app.post('/auth/register', registerValidation, register)
app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  })
})

app.get('/tags', PostController.getLastTags)

app.get('/posts', PostController.getAll)
app.get('/posts/tags', PostController.getLastTags)
app.get('/posts/:id', PostController.getOne)
app.post('/posts', checkAuth, postCreateValidation, PostController.create)
app.delete('/posts/:id', checkAuth, PostController.remove)
app.patch('/posts/:id', checkAuth, postCreateValidation, PostController.update)

app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Server OK!')
})
