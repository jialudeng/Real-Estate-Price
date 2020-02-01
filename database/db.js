/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/graph', { useNewUrlParser: true });
const { Schema } = mongoose;
const db = mongoose.connection;
db.dropDatabase();
const data = require('./data.js');

const graphSchema = new Schema({
  id: Number,
  city: {
    name: String,
    datePrice: [{
      date: String,
      price: Number,
    }],
  },
  neighborhood: {
    name: String,
    datePrice: [{
      date: String,
      price: Number,
    }],
  },
  property: {
    name: String,
    datePrice: [{
      date: String,
      price: Number,
      status: String,
    }],
  },
});

const Graph = mongoose.model('Graph', graphSchema);


const save = (callback) => {
  Graph.insertMany(data.generateGraph(1), (err) => {
    if (err) console.log(err);
  });
  callback();
};

const retrieve = (callback) => {
  const query = Graph.find();
  query.exec((err, docs) => {
    if (err) console.log(err);
    callback(docs);
  });
};

module.exports.save = save;
module.exports.retrieve = retrieve;
