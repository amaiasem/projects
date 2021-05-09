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

async function updateCard(req, res) {
  const id = req.body._id;
  const toUpdate = req.body;

  try {
    const updatedCard = await Card.findByIdAndUpdate(id, toUpdate, { new: true }).exec();
    res.json(updatedCard);
  } catch (error) {
    res.status(500);
    res.send('Could not update the card');
  }
}

function deleteCard(req, res) {
  const id = req.body._id;

  Card.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(500);
      res.send('Error. Could not delte the card');
    } else {
      res.status(200);
      res.send('Card deleted!');
    }
  });
}

function createTask(req, res) {
  const task = req.body;
  const id = req.params.card;

  Card.findByIdAndUpdate(
    id,
    { $push: { tasks: task } }, { new: true },
    (error, updatedCard) => {
      if (error) {
        res.status(500);
        res.send('Could not add new task');
      } else {
        res.json(updatedCard);
      }
    }
  );
}

function deleteTask(req, res) {
  const { card } = req.params;
  const { taskID } = req.params;

  Card.findByIdAndUpdate(
    card,
    { $pull: { tasks: { _id: taskID } } },
    { new: true },
    (error, updatedCard) => {
      if (error) {
        res.status(500);
        res.send('Could not delete the task');
      } else {
        res.json(updatedCard);
      }
    }
  );
}

function updateTask(req, res) {
  const { card } = req.params;
  const task = req.body;

  Card.findOneAndUpdate({
    _id: card,
    tasks: { $elemMatch: { _id: task._id } }
  },
  { $set: { 'tasks.$.done': task.done } },
  { new: true },
  (error, updatedCard) => {
    if (error) {
      res.status(500);
      res.send('Could not update the task');
    } else {
      res.json(updatedCard);
    }
  });
}

module.exports = {
  getAllCards,
  createCard,
  updateCard,
  createTask,
  deleteTask,
  updateTask,
  deleteCard
};
