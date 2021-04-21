const Card = require('../models/cardModel');

function getAllCards(req, res) {
  const query = {};

  Card.find(query, (error, foundCards) => {
    if (error) {
      res.status(500);
      res.send('Could not find any cards');
    } else {
      res.json(foundCards);
    }
  });
}

function createCard(req, res) {
  const newCard = new Card(req.body);

  newCard.save((error) => {
    if (error) {
      res.status(500);
      res.send('Could not create a new Card');
    } else {
      res.json(newCard);
    }
  });
}

module.exports = { getAllCards, createCard };
