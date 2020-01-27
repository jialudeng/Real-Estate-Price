const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/graph', {useNewUrlParser: true});
const Schema = mongoose.Schema;
const db = mongoose.connection;
db.dropDatabase();
const data = require('./data.js');

const graphSchema = new Schema({
  id: Number,
  city: {
    name: String,
    price: [{
      date: String, 
      price: Number
    }]
  },
  neighborhood: {
    name: String,
    price: [{
      date: String, 
      price: Number
    }]
  },
  property:  {
    name: String,
    price: [{
      date: String, 
      price: Number, 
      status: String
    }]
  },
});

const Graph = mongoose.model('Graph', graphSchema);

Graph.insertMany(data.generateGraph(100), (err) => {
  if (err) console.log(err)
});


