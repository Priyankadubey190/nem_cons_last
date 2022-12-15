const express = require('express');
//const { authentication } = require('../middleware/authentication');
const {WomenWishListModel} = require('../models/WishlistWomen.model');
const {WomenModel} = require('../models/Women.model')
const womenwishlistRoute = express.Router();

womenwishlistRoute.get("/", async(req,res)=>{
    try{
        let data = await WomenWishListModel.find();   
        res.send(data)
    }
    catch(err){
        console.log("err",err)
    }
})

womenwishlistRoute.post("/post/:id", async (req, res)=>{
    //const payload = req.body
    const ids = req.params.id

    try{
        let data = await WomenModel.findOne({_id:ids})
        const new_data = await WomenWishListModel.insertMany([data]);
        res.send (new_data)
    }
    catch(err){
        console.log("err",err)
        res.send({"err": "Something went wrong"})
    }
})

module.exports = {womenwishlistRoute}