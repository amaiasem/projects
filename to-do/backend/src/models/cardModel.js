const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
  name: String,
  color: String,
  done: Number,
  tasks: [{
    taskName: String,
    done: Boolean
  }]
});

module.exports = model('Card', cardSchema);
