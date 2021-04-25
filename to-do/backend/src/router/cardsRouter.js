const { Router } = require('express');
const cardsController = require('../controller/cardsController');

function cardsRouter() {
  const router = Router();

  router
    .route('/')
    .get(cardsController.getAllCards)
    .post(cardsController.createCard);

  router
    .route('/card/:card')
    .put(cardsController.createTask);

  router
    .route('/:card/tasks/:taskID')
    .put(cardsController.deleteTask);

  router
    .route('/:card/update-task')
    .put(cardsController.updateTask);

  return router;
}

module.exports = cardsRouter();
