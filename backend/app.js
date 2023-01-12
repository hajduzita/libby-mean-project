const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');
const quoteRoutes = require('./routes/quotes');

const app = express();

// DB connection
mongoose.connect('mongodb+srv://admin:Pass1234@libby.kq1dmqy.mongodb.net/node-angular?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDb successfully by Mongoose!');
  })
  .catch(() => {
    console.log('Connection to mongoDb is failed!');
  });

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS origin problem solver:
app.use((req,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-with, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  next();
});

// Example
app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api/quotes', quoteRoutes);


module.exports = app;
