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

  return router;
}

module.exports = cardsRouter();
