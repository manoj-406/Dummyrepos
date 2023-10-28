const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: string,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  poster: {
    type: string,
    required: true
  }
});

const Movie = mongoose.model('Movie.', movieschema);

module.exports = Movie;
