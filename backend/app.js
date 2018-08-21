const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const Post = require('./models/post.js');

const app = express();

mongoose.connect("mongodb+srv://taylor:Prophet1!@node-rest-shop-vrwbo.mongodb.net/node-angular?retryWrites=true")
.then(()=>console.log('Connected to database'))
.catch(()=>console.log('Connection to database failed'))

app.use(bodyParser.json());


//setting cors headers manually
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
"GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.get('/api/posts', (req, res, next) => {
Post.find().then(documents => {
  console.log(documents)
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: documents
  });
});
})

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title:req.body.title,
    content: req.body.content
  });
  console.log(post);
  post.save();
  res.status(201).json({message: 'Post added successfully'});
})

module.exports = app;
