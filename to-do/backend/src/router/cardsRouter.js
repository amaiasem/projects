const { Router } = require('express');
const cardsController = require('../controller/cardsController');

function cardsRouter() {
  const router = Router();

  router
    .route('/')
    .get(cardsController.getAllCards)
    .post(cardsController.createCard);

  return router;
}

module.exports = cardsRouter();
