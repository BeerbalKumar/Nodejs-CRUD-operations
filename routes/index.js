const express = require('express');
const routes = express.Router();

routes.get("/", async(req,res)=>{

    res.send({message:"index is working"})
});
routes.use('/users',require('./Post/post'));

module.exports = routes