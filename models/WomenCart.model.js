
const mongoose = require('mongoose');

const womenCartSchema = mongoose.Schema({
   id: {type: Number},
   image: {type: String, required: true}, 
   color: {type: String, required: true},
   price: String, 
   review: {type: String, required: true},
   userID: String
})

const WomenCartModel = mongoose.model("womenscart",womenCartSchema);

module.exports = {WomenCartModel}