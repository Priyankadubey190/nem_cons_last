const {Router} = require("express");
const {AllproductModel} = require("../models/Allproduct.model")
const allproductRoute = Router();

allproductRoute.get("/", async(req,res)=>{
    try{
        let query = req.query;
        let size = query.size || 9;
        let page = query.page || 1;

        const data = await AllproductModel.find(query).limit(size).skip((page-1)*size);
        res.send(data);
    }
    catch(err){
        console.log("err",err);
    }
    
})

module.exports = {allproductRoute}