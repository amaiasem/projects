/* eslint-disable no-underscore-dangle */
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

function createTask(req, res) {
  const task = req.body;
  const id = req.params.card;
  // eslint-disable-next-line no-console
  console.log(`ID ${id}`);
  console.log(`Request ${req.body.taskName}`);

  Card.findByIdAndUpdate(
    id,
    { $push: { tasks: task } }, { new: true },
    (error, uppdatedCard) => {
      if (error) {
        res.status(500);
        res.send(error);
        console.log(error);
      } else {
        res.json(uppdatedCard);
      }
    }
  );
}

module.exports = { getAllCards, createCard, createTask };
