const {Router} = require('express');
const {WomenWishListModel} = require('../models/WishlistWomen.model');
const {WomenCartModel} = require("../models/WomenCart.model")

const womencartRoute = Router();

womencartRoute.delete("/delete", async(req,res)=>{
    try{
       let data = await WomenWishListModel.deleteMany({});
       let cart = await WomenCartModel.insertMany([data])
       res.send(cart);
    }
    catch(err){
        console.log("err",err)
    }
})

module.exports = {womencartRoute};