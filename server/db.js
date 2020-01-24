var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/graph', {useNewUrlParser: true});
var Schema = mongoose.Schema;

var db = mongoose.connection;

var graphSchema = new Schema({
  id: Number,
  city: {
    name: String,
    price: [{
      date: Date, 
      price: Number
    }]
  },
  neighborhood: {
    name: String,
    price: [{
      date: Date, 
      price: Number
    }]
  },
  property:  {
    name: String,
    price: [{
      date: Date, 
      price: Number, 
      status: String
    }]
  },

});
