const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const router = express.Router();

router.post('/sign-up', (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(result => {
          res.status(201).json({
            message: 'User created successfully',
            result: result
          })
          }
        )
        .catch(err => {
          res.status(500).json({
            error: err
          })
        });
    });
});

router.post('/sign-in', (req, res, next) => {
  let accessUser;
  User.findOne({ email: req.body.email})
    .then(user => {
      if (!user) {
        res.status(404).json({
          message: 'There is no user with this email address'
        })
      }
      accessUser = user;
      return bcrypt.compare(req.body.password, user.password)
    })
    .then(result => {
      if (!result) {
        res.status(401).json({
          message: 'Authentication failed'
        })
      }
      const token = jwt.sign(
        {
        email: accessUser.email,
        id: accessUser._id
        },
        'secret-word-jrgjfreágjhiohcbdewufd4d783ru92ut6749r3e2',
        { expiresIn: '1h'}
      )
      res.status(200).json({
        token: token,
        userId: accessUser._id
      })
    })
    .catch(err => {
      res.status(401).json({
        message: 'Authentication failed'
      })
    })
});

module.exports = router;
