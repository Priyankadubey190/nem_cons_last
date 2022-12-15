
const mongoose = require('mongoose');

const womenwishlistSchema = mongoose.Schema({
   id: {type: Number},
   image: {type: String, required: true}, 
   color: {type: String, required: true},
   price: String, 
   review: {type: String, required: true},
   userID: String
})

const WomenWishListModel = mongoose.model("womenwishlist",womenwishlistSchema);

module.exports = {WomenWishListModel}