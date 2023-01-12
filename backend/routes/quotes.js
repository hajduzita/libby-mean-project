const express = require('express');
const router = express.Router();

const Quote = require('../models/quote');
const checkAuth = require('../middleware/check-auth');

// Add new quote
router.post('', checkAuth, (req, res, next) => {
  const quote = new Quote({
    author: req.body.author,
    bookTitle: req.body.bookTitle,
    quote: req.body.quote,
    page: req.body.page,
    publisher: req.body.publisher,
    publishYear: req.body.publishYear,
    creator: req.userData.userId
  });
  console.log(quote);
  quote.save();
  res.status(201)
    .json({
      message: 'Quote added'
    });
});

// List all quotes
router.get(
  '',
  checkAuth,
  (req, res, next) => {
  Quote.find()
    .then(documents => {
      console.log(documents);
      res.status(201).json({
        message: 'Quotes gets successfully!',
        quotes: documents
      });
    });
});

// Get one quote
router.get(
  '/:id',
  checkAuth,
  (req, res, next) => {
    Quote.findById(req.params.id)
      .then(quote => {
        if (quote) {
          res.status(200).json(quote)
        } else {
          console.log(error);
          res.status(404).json({ message: 'Quote not found'})
        }
      });
  }
);

// Update quote
router.put(
  '/:id',
  checkAuth,
  (req, res, next) => {
    //const updateQuote = new Quote(
    const updateQuote = (
      {
        _id: req.body.data.id,
        author: req.body.data.author,
        bookTitle: req.body.data.bookTitle,
        quote: req.body.data.quote,
        page: req.body.data.page,
        publisher: req.body.data.publisher,
        publishYear: req.body.data.publishYear,
        creator: req.userData.userId
      }
    )
    Quote.updateOne({_id: req.params.id, creator: req.userData.userId}, updateQuote)
      .then(result => {
        console.log('updated qoute', result, updateQuote);
        if(result.modifiedCount >= 0) {
          console.log('200 updateQuote', updateQuote)
          res.status(200).json({ message: 'Quote updated successfully!' })
        } else {q
          res.status(401).json({ message: 'Authoriztion error, you does not have the rights to edit this quote'})
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Does not update the quote!'})
      })
  }
)

// Delete quote
router.delete(
  '/:id',
  checkAuth,
  (req, res, next) => {
    Quote.deleteOne({
      _id: req.params.id, creator: req.userData.userId
    })
      .then((result) => {
        console.log(result);
        if (result.deletedCount > 0) {
          res.status(200).json({ message: 'Quote deleted!' });
        } else {
          res.status(401).json({ message: 'Not authorized, you have no rights to delete this quote' });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Delete quote has failed!' });
      })
  }
);


module.exports = router;
