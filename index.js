const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Blog = require('./models/Blog');
const Comment = require('./models/Comment');
const env = require('dotenv').config();
const app = express();
app.use(express.json());

const uri =proccess.env.MONGODB_URI ;

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
});

// Say hello in / route
app.get('/', (req, res) => {
  res.send('Hello Worlddd');
});

// Get users in /users route
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.status(500).send(err);
  }
});

// Get blogs in /blogs route
app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (err) {
    console.error("Error retrieving blogs:", err);
    res.status(500).send(err);
  }
});

// Start the Server
app.listen(4500, () => {
  console.log('Server is running on port 4500');
});
